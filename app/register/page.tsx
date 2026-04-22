"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export default function RegisterPage() {
  const router = useRouter()
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    const res = await fetch(`${BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, fullname }),
    })

    if (!res.ok) {
    const data = await res.json()
    if (Array.isArray(data.detail)) {
        setError(data.detail.map((err: any) => err.msg).join(", "))
    } else {
        setError(data.detail || "Something went wrong")
    }
    return
    }

    router.push("/login")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-black">Create an account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-black">Full Name</label>
            <input
              type="text"
              value={fullname}
              onChange={e => setFullname(e.target.value)}
              placeholder="John Doe"
              required
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-black">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-md transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-black text-center">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
            Sign in
          </a>
        </p>
      </div>
    </main>
  )
}