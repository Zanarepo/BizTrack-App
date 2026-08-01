import React, { useState, useMemo } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useInventory } from '../hooks/useInventory';
import { useCart } from '../hooks/useCart';
import { useBusiness } from '../hooks/useBusiness';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SearchInput } from '../components/SearchInput';
import { Toast } from '../components/Toast';
import { Modal } from '../components/Modal';
import { Trash2, Plus, ShoppingCart } from 'lucide-react';
import type { PaymentMethod } from '../types/sales';

export const NewSale: React.FC = () => {
  const { t } = useLanguage();
  const { products, categories } = useInventory();
  const { cart, subtotal, addToCart, updateQuantity, removeFromCart, checkout } = useCart();
  const { getCurrencySymbol } = useBusiness();
  const currSymbol = getCurrencySymbol();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmMethod, setConfirmMethod] = useState<PaymentMethod>('CASH');
  const [isProcessing, setIsProcessing] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const formatCurrency = (val: number) =>
    `${currSymbol}${Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  // Filter products by search query for the lookup modal
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const lowerQuery = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.product_name.toLowerCase().includes(lowerQuery) ||
        (p.sku && p.sku.toLowerCase().includes(lowerQuery)),
    );
  }, [products, searchQuery]);

  const handleTapAdd = (product: (typeof products)[0]) => {
    if (product.current_stock <= 0) {
      setToast({ message: t('statOutOfStock'), type: 'error' });
      return;
    }

    const cartItem = cart.find((item) => item.product.id === product.id);
    const currentCartQty = cartItem ? cartItem.quantity : 0;

    if (currentCartQty + 1 > product.current_stock) {
      setToast({ message: `Only ${product.current_stock} in stock.`, type: 'error' });
      return;
    }

    addToCart(product, 1);
    setToast({ message: `${product.product_name} added`, type: 'success' });
  };

  const triggerConfirm = (method: PaymentMethod) => {
    setConfirmMethod(method);
    setIsConfirmOpen(true);
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsConfirmOpen(false);
    setIsProcessing(true);
    const { success } = await checkout(confirmMethod);
    setIsProcessing(false);

    if (success) {
      setToast({ message: t('checkoutSuccess'), type: 'success' });
    } else {
      setToast({ message: t('saleFailed'), type: 'error' });
    }
  };

  // Inline CSS Styles matching Design System
  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '16px 8px',
    minHeight: 'calc(100vh - 12rem)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const cartListStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '4px 0',
  };

  const cartItemStyle: React.CSSProperties = {
    padding: '14px 16px',
    backgroundColor: 'var(--card-bg-elevated, rgba(0,0,0,0.02))',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border-color)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
  };

  const modalProductListStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxHeight: '350px',
    overflowY: 'auto',
    marginTop: '12px',
    paddingRight: '4px',
  };

  const modalProductRowStyle: React.CSSProperties = {
    padding: '12px 14px',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
  };

  const getMethodLabel = (method: PaymentMethod) => {
    switch (method) {
      case 'CASH':
        return t('payMethodCash');
      case 'POS':
        return t('payMethodPOS');
      case 'TRANSFER':
        return t('payMethodTransfer');
      default:
        return method;
    }
  };

  return (
    <div style={containerStyle}>
      <Card style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
        {/* Custom Header rendered inside the Card */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '12px',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}
          >
            <ShoppingCart size={22} color="var(--brand-primary)" />
            {t('cartTitle')}
          </span>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setIsSelectOpen(true);
            }}
            leftIcon={<Plus size={16} />}
          >
            Add Item
          </Button>
        </div>

        {/* Full-width Cart List */}
        <div
          style={{
            flex: 1,
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: cart.length === 0 ? 'center' : 'flex-start',
          }}
        >
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '60px 0' }}>
              {t('cartEmpty')}
            </div>
          ) : (
            <div style={cartListStyle}>
              {cart.map((item) => {
                const cat = categories.find((c) => c.id === item.product.category_id);
                const categoryName = cat ? cat.name : 'General';
                return (
                  <div key={item.product.id} style={cartItemStyle}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '2px',
                        }}
                      >
                        {categoryName}
                      </span>
                      <strong style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>
                        {item.product.product_name}
                      </strong>
                      <div
                        style={{ color: 'var(--brand-primary)', fontWeight: 800, marginTop: '2px' }}
                      >
                        {formatCurrency(Number(item.product.selling_price) * item.quantity)}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-app)',
                            color: 'var(--text-main)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                          }}
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span
                          style={{
                            width: '24px',
                            textAlign: 'center',
                            fontWeight: 800,
                            fontSize: '1.1rem',
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-app)',
                            color: 'var(--text-main)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                          }}
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--brand-danger)',
                          cursor: 'pointer',
                          padding: '6px',
                        }}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Billing & Checkout Buttons */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '20px',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <span style={{ fontWeight: 700, color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              {t('cartTotal')}
            </span>
            <span style={{ fontSize: '2.1rem', fontWeight: 900, color: 'var(--brand-primary)' }}>
              {formatCurrency(subtotal)}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button
                variant="outline"
                size="sm"
                style={{ flex: '1 1 140px', padding: '8px' }}
                disabled={cart.length === 0 || isProcessing}
                onClick={() => triggerConfirm('CASH')}
              >
                💵 {t('payMethodCash')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                style={{ flex: '1 1 140px', padding: '8px' }}
                disabled={cart.length === 0 || isProcessing}
                onClick={() => triggerConfirm('POS')}
              >
                💳 {t('payMethodPOS')}
              </Button>
            </div>
            <Button
              variant="secondary"
              size="sm"
              style={{ width: '100%', padding: '8px' }}
              disabled={cart.length === 0 || isProcessing}
              onClick={() => triggerConfirm('TRANSFER')}
            >
              🏦 {t('payMethodTransfer')}
            </Button>
          </div>
        </div>
      </Card>

      {/* Lookup Product Modal */}
      <Modal
        isOpen={isSelectOpen}
        onClose={() => setIsSelectOpen(false)}
        title="Add Product to Cart"
      >
        <SearchInput
          placeholder="Type product name or SKU..."
          value={searchQuery}
          onChange={(val) => setSearchQuery(val)}
        />

        <div style={modalProductListStyle}>
          {filteredProducts.map((p) => {
            // Find current quantity in cart to display remaining stock
            const cartItem = cart.find((item) => item.product.id === p.id);
            const qtyInCart = cartItem ? cartItem.quantity : 0;
            const remainingStock = p.current_stock - qtyInCart;

            return (
              <div key={p.id} style={modalProductRowStyle}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.05rem' }}>
                    {p.product_name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Available Stock:{' '}
                    {remainingStock > 0 ? `${remainingStock} ${p.unit}` : 'Out of stock'}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{ fontWeight: 850, color: 'var(--brand-primary)', fontSize: '1.1rem' }}
                  >
                    {formatCurrency(Number(p.selling_price))}
                  </span>
                  <Button
                    variant="primary"
                    size="sm"
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onClick={() => handleTapAdd(p)}
                    disabled={remainingStock <= 0}
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </Button>
                </div>
              </div>
            );
          })}
          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
              No products found
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
          <Button variant="ghost" onClick={() => setIsSelectOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        title="Confirm Sale Checkout"
      >
        <div style={{ padding: '8px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>
            Are you sure you want to complete this sale?
          </p>
          <div
            style={{
              padding: '12px 14px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--card-bg-elevated, rgba(0,0,0,0.02))',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Payment Method:</span>
              <strong style={{ color: 'var(--text-main)' }}>{getMethodLabel(confirmMethod)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Total Amount:</span>
              <strong style={{ color: 'var(--brand-primary)', fontSize: '1.2rem' }}>
                {formatCurrency(subtotal)}
              </strong>
            </div>
          </div>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}
        >
          <Button variant="ghost" onClick={() => setIsConfirmOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleCheckout}>
            Confirm Checkout
          </Button>
        </div>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
};
