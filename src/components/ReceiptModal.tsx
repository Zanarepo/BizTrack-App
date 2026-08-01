import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useBusiness } from '../hooks/useBusiness';
import { Modal } from './Modal';
import { Button } from './Button';
import type { Sale, SaleItem } from '../types/sales';

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  sale: Sale | null;
  saleItems: SaleItem[];
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ isOpen, onClose, sale, saleItems }) => {
  const { t } = useLanguage();
  const { business, getCurrencySymbol } = useBusiness();
  const currSymbol = getCurrencySymbol();

  const formatCurrency = (val: number) =>
    `${currSymbol}${Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString(undefined, { dateStyle: 'medium' });

  if (!sale) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('receiptTitle')}>
      {/* Printable Area */}
      <div
        id="receipt-print-area"
        className="p-6 bg-white text-slate-800 font-mono text-sm max-w-sm mx-auto border border-slate-200 shadow-sm rounded-lg"
      >
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold uppercase">
            {business?.business_name || 'My Business'}
          </h2>
          <p className="text-xs text-slate-500 mt-1">Receipt: {sale.receipt_number}</p>
          <p className="text-xs text-slate-500">
            {formatDate(sale.created_at || new Date().toISOString())}
          </p>
        </div>

        <div className="border-t border-b border-dashed border-slate-300 py-3 mb-4 space-y-2">
          {saleItems.map((item, idx) => (
            <div key={item.id || idx} className="flex justify-between items-start">
              <div className="flex-1 pr-2">
                <span className="block font-semibold">Item {idx + 1}</span>
                <span className="text-xs text-slate-500">
                  {item.quantity} x {formatCurrency(item.selling_price)}
                </span>
              </div>
              <div className="font-semibold text-right">{formatCurrency(item.line_total)}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between font-bold text-base">
            <span>{t('colTotalAmount')}:</span>
            <span>{formatCurrency(sale.total_amount)}</span>
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>Payment Method:</span>
            <span>{sale.payment_method}</span>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-slate-500">
          <p>Thank you for shopping with us!</p>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-3 print:hidden">
        <Button variant="outline" onClick={onClose}>
          {t('btnCancel')}
        </Button>
        <Button variant="primary" onClick={handlePrint}>
          🖨️ {t('printReceipt')}
        </Button>
      </div>

      {/* Print Styles injected via JS */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #receipt-print-area, #receipt-print-area * {
            visibility: visible;
          }
          #receipt-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none;
            box-shadow: none;
          }
        }
      `}</style>
    </Modal>
  );
};
