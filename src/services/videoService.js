import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://lrosttaqppkuyxcpbwsh.supabase.co';
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb3N0dGFxcHBrdXl4Y3Bid3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODczMzAsImV4cCI6MTk4Mzc2MzMzMH0.AKzmFRKmYAoyVOnwg69_6472jiY349HSvmkWcxUs0wk';

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function videoServices() {
  return {
    getAllVideos() {
      return supabase.from('video').select('*');
    },
  };
}
