import { NextResponse } from 'next/server'
const BACKEND_URL = process.env.BACKEND_URL

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(`${BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  if (!res.ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const response = NextResponse.json({ success: true });
  response.cookies.set('token', data.token, { httpOnly: true, secure: true });
  return response;
}