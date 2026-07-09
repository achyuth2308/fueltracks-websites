-- ====================================================================
-- DATABASE MIGRATION FOR FUEL TRACKS DEMO REGISTRATIONS
-- Run this script in your Supabase SQL Editor (https://supabase.com)
-- ====================================================================

-- 1. Add new columns to the 'demo_users' table if they do not exist
ALTER TABLE demo_users 
ADD COLUMN IF NOT EXISTS registration_count INTEGER DEFAULT 1;

ALTER TABLE demo_users 
ADD COLUMN IF NOT EXISTS daily_registration_count INTEGER DEFAULT 1;

ALTER TABLE demo_users 
ADD COLUMN IF NOT EXISTS first_registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

ALTER TABLE demo_users 
ADD COLUMN IF NOT EXISTS last_registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- 2. Backfill existing records to set sensible default values
UPDATE demo_users 
SET 
  first_registered_at = COALESCE(first_registered_at, created_at, NOW()),
  last_registered_at = COALESCE(last_registered_at, updated_at, created_at, NOW()),
  registration_count = COALESCE(registration_count, 1),
  daily_registration_count = COALESCE(daily_registration_count, 1);

-- 3. Row Level Security (RLS) configuration:
-- If RLS is enabled on 'demo_users', we must allow anonymous (public) selects, inserts, and updates.
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM pg_tables 
        WHERE schemaname = 'public' 
          AND tablename = 'demo_users' 
          AND rowsecurity = true
    ) THEN
        -- Allow public select (to check if a mobile number is already registered)
        IF NOT EXISTS (
            SELECT 1 FROM pg_policies 
            WHERE tablename = 'demo_users' 
              AND policyname = 'Allow public select on demo_users'
        ) THEN
            CREATE POLICY "Allow public select on demo_users" 
            ON demo_users FOR SELECT 
            TO public 
            USING (true);
        END IF;

        -- Allow public insert (to register new users)
        IF NOT EXISTS (
            SELECT 1 FROM pg_policies 
            WHERE tablename = 'demo_users' 
              AND policyname = 'Allow public insert on demo_users'
        ) THEN
            CREATE POLICY "Allow public insert on demo_users" 
            ON demo_users FOR INSERT 
            TO public 
            WITH CHECK (true);
        END IF;

        -- Allow public update (to increment registration counts and update timestamps)
        IF NOT EXISTS (
            SELECT 1 FROM pg_policies 
            WHERE tablename = 'demo_users' 
              AND policyname = 'Allow public update on demo_users'
        ) THEN
            CREATE POLICY "Allow public update on demo_users" 
            ON demo_users FOR UPDATE 
            TO public 
            USING (true)
            WITH CHECK (true);
        END IF;
    END IF;
END $$;
