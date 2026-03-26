// Simple admin auth helper - checks Authorization header for admin token
export function isAdminRequest(request: Request): boolean {
  const authHeader = request.headers.get('authorization')
  const adminToken = process.env.ADMIN_SECRET_TOKEN
  if (!adminToken) return false
  return authHeader === `Bearer ${adminToken}`
}

export function adminResponse() {
  return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' },
  })
}
