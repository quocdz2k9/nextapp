"use client"

import { signIn } from "next-auth/react"
import { Github, Chrome } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6">
      <div className="w-full max-w-sm space-y-4">

        <h1 className="text-2xl font-semibold text-center text-black dark:text-white">
          Sign in to NextApp
        </h1>

        {/* Google */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 border border-neutral-300 dark:border-neutral-800 
          bg-white dark:bg-neutral-900 
          text-black dark:text-white 
          p-3 rounded-xl 
          hover:bg-neutral-100 dark:hover:bg-neutral-800 
          transition"
        >
          <Chrome size={20} />
          Continue with Google
        </button>

        {/* GitHub */}
        <button
          onClick={() => signIn("github")}
          className="w-full flex items-center justify-center gap-3 border border-neutral-300 dark:border-neutral-800 
          bg-white dark:bg-neutral-900 
          text-black dark:text-white 
          p-3 rounded-xl 
          hover:bg-neutral-100 dark:hover:bg-neutral-800 
          transition"
        >
          <Github size={20} />
          Continue with GitHub
        </button>

      </div>
    </div>
  )
}
