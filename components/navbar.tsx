"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Monitor } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <svg
            width="24"
            height="20"
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5274 0L75.0548 65H0L37.5274 0Z"
              fill="#ffffff"
            />
          </svg>
          MinhApp
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          
          {/* Hiện luôn trên mobile */}
          <Button variant="outline">
            Đăng nhập
          </Button>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 hover:bg-zinc-800 transition"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="bg-zinc-950 border-t border-zinc-800 px-6 py-6 space-y-6 text-zinc-200">

          {/* Menu link */}
          <div className="space-y-3">
            <p className="hover:text-white cursor-pointer">Trang chủ</p>
            <p className="hover:text-white cursor-pointer">Sản phẩm</p>
            <p className="hover:text-white cursor-pointer">Tài nguyên</p>
            <p className="hover:text-white cursor-pointer">Giải pháp</p>
            <p className="hover:text-white cursor-pointer">Bảng giá</p>
          </div>

          {/* Giao diện */}
          <div className="pt-4 border-t border-zinc-800">
            <p className="mb-3 text-sm text-zinc-400">Giao diện</p>

            <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-full w-fit border border-zinc-800">
              
              <button
                onClick={() => setTheme("system")}
                className={`p-2 rounded-full transition ${
                  theme === "system" ? "bg-zinc-700 text-white" : "text-zinc-400"
                }`}
              >
                <Monitor size={16} />
              </button>

              <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition ${
                  theme === "light" ? "bg-zinc-700 text-white" : "text-zinc-400"
                }`}
              >
                <Sun size={16} />
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition ${
                  theme === "dark" ? "bg-zinc-700 text-white" : "text-zinc-400"
                }`}
              >
                <Moon size={16} />
              </button>
            </div>
          </div>

          {/* Login full width */}
          <div className="pt-4 border-t border-zinc-800">
            <Button className="w-full">Đăng nhập</Button>
          </div>
        </div>
      )}
    </header>
  )
}
