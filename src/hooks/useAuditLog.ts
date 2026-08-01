import { useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import { useBusiness } from './useBusiness';

export interface AuditLogPayload {
  action: string;
  entity: string;
  entityId?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata?: Record<string, any>;
}

export const useAuditLog = () => {
  const { user } = useAuth();
  const { business } = useBusiness();

  const logAction = useCallback(
    async (payload: AuditLogPayload) => {
      // If not authenticated or no active business, we can't log this strictly to a business.
      // In a real app, some actions (like failed logins) might be logged without a businessId.
      // For this MVP, we enforce businessId for our RLS policies.
      if (!user || !business) {
        console.warn('Audit Log: Ignored because user or business is missing', payload);
        return;
      }

      try {
        const { error } = await supabase.from('audit_logs').insert([
          {
            business_id: business.id,
            user_id: user.id,
            action: payload.action,
            entity: payload.entity,
            entity_id: payload.entityId,
            metadata: payload.metadata || {},
            user_agent: navigator.userAgent,
          },
        ]);

        if (error) {
          console.error('Failed to write audit log:', error);
        }
      } catch (err) {
        console.error('Audit log exception:', err);
      }
    },
    [user, business],
  );

  return { logAction };
};
