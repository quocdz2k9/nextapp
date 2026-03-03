"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)

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
          <Button variant="outline" className="hidden sm:inline-flex">
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

      {/* Dropdown Menu */}
      {open && (
        <div className="bg-zinc-950 border-t border-zinc-800 px-6 py-6 space-y-4 text-zinc-200">
          <div className="space-y-3">
            <p className="hover:text-white cursor-pointer">Trang chủ</p>
            <p className="hover:text-white cursor-pointer">Sản phẩm</p>
            <p className="hover:text-white cursor-pointer">Tài nguyên</p>
            <p className="hover:text-white cursor-pointer">Giải pháp</p>
            <p className="hover:text-white cursor-pointer">Bảng giá</p>
          </div>

          <div className="pt-4 border-t border-zinc-800">
            <Button className="w-full">Đăng nhập</Button>
          </div>
        </div>
      )}
    </header>
  )
}
