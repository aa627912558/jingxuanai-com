import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Service role client for server-side admin operations (not exposed to client)
let _adminClient: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  if (_adminClient) return _adminClient
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  if (!serviceRoleKey || !supabaseUrl) {
    // Return a dummy client that will fail gracefully
    return createClient(supabaseUrl || 'http://localhost', serviceRoleKey || 'dummy')
  }
  _adminClient = createClient(supabaseUrl, serviceRoleKey)
  return _adminClient
}
