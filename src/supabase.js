import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()

// Keep the storefront usable when order service configuration is missing.
let client = null
if (supabaseUrl && supabaseAnonKey) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey)
  } catch {
    console.error('La configuración del servicio de pedidos no es válida.')
  }
}
export const supabase = client
