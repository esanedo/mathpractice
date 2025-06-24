import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vzmizlqhupgeyksoewgu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bWl6bHFodXBnZXlrc29ld2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NjQ4NjYsImV4cCI6MjA2NjM0MDg2Nn0.pU8z6NSUMOcNEzMiot4yBFh_Gk6ZzYLle7eZAPRWXDY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);