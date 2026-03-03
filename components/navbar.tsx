"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Monitor } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 w-full z-50 
      bg-background/80 backdrop-blur 
      border-b border-border transition-colors duration-300">

      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
<div className="flex items-center gap-2 font-semibold text-lg 
  text-foreground transition-colors duration-300">
  
  <svg
    width="24"
    height="20"
    viewBox="0 0 76 65"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors duration-300"
    fill="currentColor"
  >
    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
  </svg>

  <span className="transition-colors duration-300">
    MinhApp
  </span>
</div>

        <div className="flex items-center gap-3">
          <Button variant="outline">
            Đăng nhập
          </Button>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center w-10 h-10 rounded-full 
              border border-border hover:bg-muted transition"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-background border-t border-border 
          px-6 py-6 space-y-6 text-foreground transition-colors duration-300">

          <div className="space-y-3">
            <p className="hover:opacity-80 cursor-pointer">Trang chủ</p>
            <p className="hover:opacity-80 cursor-pointer">Sản phẩm</p>
            <p className="hover:opacity-80 cursor-pointer">Tài nguyên</p>
            <p className="hover:opacity-80 cursor-pointer">Giải pháp</p>
            <p className="hover:opacity-80 cursor-pointer">Bảng giá</p>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="mb-3 text-sm text-muted-foreground">
              Giao diện
            </p>

            <div className="flex items-center gap-2 
              bg-muted p-1 rounded-full w-fit border border-border">

              <button
                onClick={() => setTheme("system")}
                className={`p-2 rounded-full transition ${
                  theme === "system" && "bg-background shadow"
                }`}
              >
                <Monitor size={16} />
              </button>

              <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition ${
                  theme === "light" && "bg-background shadow"
                }`}
              >
                <Sun size={16} />
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition ${
                  theme === "dark" && "bg-background shadow"
                }`}
              >
                <Moon size={16} />
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <Button className="w-full">Đăng nhập</Button>
          </div>
        </div>
      )}
    </header>
  )
}
