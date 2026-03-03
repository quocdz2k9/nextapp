"use client"

import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <button
        onClick={() => signIn("google")}
        className="bg-red-500 text-white p-3 rounded"
      >
        Continue with Google
      </button>

      <button
        onClick={() => signIn("github")}
        className="bg-black text-white p-3 rounded"
      >
        Continue with GitHub
      </button>
    </div>
  )
}
