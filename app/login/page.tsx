"use client"
import LoginForm from "./LoginForm"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  async function handleRegister() {
    router.push("/register")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-4">
        <LoginForm />

        <div className="text-center">
          <p className="text-sm text-black">
            Don't have an account?{" "}
            <button
              onClick={handleRegister}
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </main>
  )
}