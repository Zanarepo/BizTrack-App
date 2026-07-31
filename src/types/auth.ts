import type { Session, User } from '@supabase/supabase-js';

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  security_question?: string;
  security_answer?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (identifier: string, passwordOrPin?: string) => Promise<{ error: Error | null }>;
  signUp: (
    identifier: string,
    passwordOrPin?: string,
    metadata?: {
      full_name?: string;
      phone?: string;
      security_question?: string;
      security_answer?: string;
    },
  ) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  fetchSecurityQuestion: (
    identifier: string,
  ) => Promise<{ question: string | null; error: Error | null }>;
  resetPinWithSecurityAnswer: (
    identifier: string,
    answer: string,
    newPin: string,
  ) => Promise<{ success: boolean; error: Error | null }>;
  updateProfile: (data: Partial<Profile>) => Promise<{ error: Error | null; data: Profile | null }>;
}
