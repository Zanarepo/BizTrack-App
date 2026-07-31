import Dexie, { type EntityTable } from 'dexie';
import type { Business } from '../types/business';
import type { Profile } from '../types/auth';
import type { Product, ProductCategory, InventoryTransaction } from '../types/inventory';

export interface SyncQueueItem {
  id?: number;
  action: 'CREATE' | 'UPDATE' | 'DELETE';
  entity:
    | 'product'
    | 'product_category'
    | 'inventory_transaction'
    | 'sale'
    | 'expense'
    | 'profile'
    | 'business';
  payload: unknown;
  createdAt: number;
  status: 'pending' | 'syncing' | 'failed';
}

export interface CachedProduct {
  id: string;
  name: string;
  price: number;
  stock: number;
  updatedAt: string;
}

export interface CachedSale {
  id: string;
  date: string;
  total: number;
  customerId?: string;
  status: 'synced' | 'pending';
}

export interface CachedExpense {
  id: string;
  date: string;
  amount: number;
  category: string;
}

export class BizTrackDatabase extends Dexie {
  syncQueue!: EntityTable<SyncQueueItem, 'id'>;
  cachedProducts!: EntityTable<CachedProduct, 'id'>;
  cachedSales!: EntityTable<CachedSale, 'id'>;
  cachedExpenses!: EntityTable<CachedExpense, 'id'>;
  cachedBusinesses!: EntityTable<Business, 'id'>;
  cachedProfiles!: EntityTable<Profile, 'id'>;
  products!: EntityTable<Product, 'id'>;
  productCategories!: EntityTable<ProductCategory, 'id'>;
  inventoryTransactions!: EntityTable<InventoryTransaction, 'id'>;

  constructor() {
    super('BizTrackDB');
    this.version(1).stores({
      syncQueue: '++id, action, entity, status, createdAt',
      cachedProducts: 'id, name, price, stock, updatedAt',
      cachedSales: 'id, date, total, status',
      cachedExpenses: 'id, date, amount, category',
    });
    this.version(2).stores({
      syncQueue: '++id, action, entity, status, createdAt',
      cachedProducts: 'id, name, price, stock, updatedAt',
      cachedSales: 'id, date, total, status',
      cachedExpenses: 'id, date, amount, category',
      cachedBusinesses: 'id, owner_id, business_name, updated_at',
    });
    this.version(3).stores({
      syncQueue: '++id, action, entity, status, createdAt',
      cachedProducts: 'id, name, price, stock, updatedAt',
      cachedSales: 'id, date, total, status',
      cachedExpenses: 'id, date, amount, category',
      cachedBusinesses: 'id, owner_id, business_name, updated_at',
      cachedProfiles: 'id, email, phone',
    });
    this.version(4).stores({
      syncQueue: '++id, action, entity, status, createdAt',
      cachedProducts: 'id, name, price, stock, updatedAt',
      cachedSales: 'id, date, total, status',
      cachedExpenses: 'id, date, amount, category',
      cachedBusinesses: 'id, owner_id, business_name, updated_at',
      cachedProfiles: 'id, email, phone',
      products: 'id, business_id, category_id, product_name, sku, is_active',
      productCategories: 'id, business_id, name',
      inventoryTransactions: 'id, business_id, product_id, movement_type, created_at',
    });
  }
}

export const db = new BizTrackDatabase();
