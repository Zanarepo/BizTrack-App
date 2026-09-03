-- Migration: Create RPC to check if user exists by email or phone
-- Timestamp: 20260903120000

create or replace function public.check_user_exists(p_identifier text)
returns boolean
language plpgsql
security definer
set search_path = public, auth, extensions
as $$
declare
  v_exists boolean;
begin
  select exists(
    select 1
    from public.profiles
    where lower(email) = lower(p_identifier) 
       or lower(phone) = lower(p_identifier)
       or lower(phone) = lower(replace(p_identifier, '@biztrack-user.local', ''))
  ) into v_exists;
  return v_exists;
end;
$$;
