/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key)
- `name` (text, not null) — the submitter's full name
- `phone` (text, not null) — the submitter's phone number
- `email` (text, not null) — the submitter's email address
- `service` (text, not null) — the type of electrical service requested
- `message` (text, not null) — the submitter's message describing their needs
- `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- This is a no-auth public contact form (single-tenant). Allow anon + authenticated INSERT only.
- No SELECT/UPDATE/DELETE policies — submissions are write-only from the frontend.
- The business owner reads submissions directly through the Supabase dashboard.

3. Notes
- The contact form on the website writes to this table using the anon key.
- No user accounts or authentication are involved.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
