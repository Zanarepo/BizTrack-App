import { db } from '../lib/dexie';
import { supabase } from '../lib/supabase';
import type { Business } from '../types/business';
import type { Profile } from '../types/auth';
import type { Product, ProductCategory, InventoryTransaction } from '../types/inventory';

let isSyncing = false;

/**
 * Background synchronization processor that flushes offline edits from Dexie to Supabase cloud.
 * Ensures local changes are uploaded before fetching cloud data to prevent overwriting edits.
 */
export const processSyncQueue = async (): Promise<number> => {
  if (isSyncing || typeof window === 'undefined' || !window.navigator.onLine) {
    return 0;
  }

  try {
    isSyncing = true;
    // Process items ordered by createdAt to maintain referential integrity (categories before products before transactions)
    const pendingItems = await db.syncQueue.where('status').equals('pending').sortBy('createdAt');
    if (pendingItems.length === 0) {
      return 0;
    }

    let syncedCount = 0;

    for (const item of pendingItems) {
      // Mark as syncing to avoid race conditions
      await db.syncQueue.update(item.id!, { status: 'syncing' });

      try {
        if (item.entity === 'business') {
          if (item.action === 'UPDATE') {
            const payload = item.payload as Partial<Business> & { id: string };
            const { error } = await supabase
              .from('businesses')
              .update(payload)
              .eq('id', payload.id);
            if (!error) {
              await db.syncQueue.delete(item.id!);
              syncedCount++;
            } else {
              await db.syncQueue.update(item.id!, { status: 'pending' });
            }
          } else if (item.action === 'CREATE') {
            const payload = item.payload as Business;
            const tempId = payload.id;
            const cleanPayload: Partial<Business> = { ...payload };
            delete cleanPayload.id;
            const { data, error } = await supabase
              .from('businesses')
              .insert([cleanPayload as Business])
              .select()
              .single();
            if (!error && data) {
              const newBiz = data as Business;
              await db.cachedBusinesses.delete(tempId);
              await db.cachedBusinesses.put(newBiz);
              await db.syncQueue.delete(item.id!);
              syncedCount++;
            } else {
              await db.syncQueue.update(item.id!, { status: 'pending' });
            }
          }
        } else if (item.entity === 'profile') {
          if (item.action === 'UPDATE') {
            const payload = item.payload as Partial<Profile> & { id: string };
            const { error } = await supabase.from('profiles').update(payload).eq('id', payload.id);
            if (!error) {
              await db.syncQueue.delete(item.id!);
              syncedCount++;
            } else {
              await db.syncQueue.update(item.id!, { status: 'pending' });
            }
          }
        } else if (item.entity === 'product_category') {
          if (item.action === 'CREATE') {
            const payload = item.payload as ProductCategory;
            const { error } = await supabase.from('product_categories').insert([payload]);
            if (!error) {
              await db.syncQueue.delete(item.id!);
              syncedCount++;
            } else {
              await db.syncQueue.update(item.id!, { status: 'pending' });
            }
          }
        } else if (item.entity === 'product') {
          if (item.action === 'CREATE') {
            const payload = item.payload as Product;
            const { error } = await supabase.from('products').insert([payload]);
            if (!error) {
              await db.syncQueue.delete(item.id!);
              syncedCount++;
            } else {
              await db.syncQueue.update(item.id!, { status: 'pending' });
            }
          } else if (item.action === 'UPDATE') {
            const payload = item.payload as Partial<Product> & { id: string };
            const { error } = await supabase.from('products').update(payload).eq('id', payload.id);
            if (!error) {
              await db.syncQueue.delete(item.id!);
              syncedCount++;
            } else {
              await db.syncQueue.update(item.id!, { status: 'pending' });
            }
          }
        } else if (item.entity === 'inventory_transaction') {
          if (item.action === 'CREATE') {
            const payload = item.payload as InventoryTransaction;
            const { error } = await supabase.from('inventory_transactions').insert([payload]);
            if (!error) {
              await db.syncQueue.delete(item.id!);
              syncedCount++;
            } else {
              await db.syncQueue.update(item.id!, { status: 'pending' });
            }
          }
        } else {
          // Future entities (sales, expenses) handled here in upcoming sprints
          await db.syncQueue.update(item.id!, { status: 'pending' });
        }
      } catch (itemErr) {
        console.error('Sync failed for item:', itemErr);
        await db.syncQueue.update(item.id!, { status: 'pending' });
      }
    }

    return syncedCount;
  } catch (err) {
    console.error('Critical error in sync processor:', err);
    return 0;
  } finally {
    isSyncing = false;
  }
};
