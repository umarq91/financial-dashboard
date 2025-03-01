"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  BarChart3, 
  LayoutDashboard, 
  LineChart, 
  PieChart, 
  Settings, 
  Users 
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  onNavClick?: () => void
}

export function Sidebar({ onNavClick }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6" />
          <span>Analytics Pro</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          <Button
            asChild
            variant={pathname === "/" ? "default" : "ghost"}
            className="justify-start"
            onClick={onNavClick}
          >
            <Link href="/">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/analytics" ? "default" : "ghost"}
            className="justify-start"
            onClick={onNavClick}
          >
            <Link href="/analytics">
              <LineChart className="mr-2 h-4 w-4" />
              Analytics
            </Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/reports" ? "default" : "ghost"}
            className="justify-start"
            onClick={onNavClick}
          >
            <Link href="/reports">
              <PieChart className="mr-2 h-4 w-4" />
              Reports
            </Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/customers" ? "default" : "ghost"}
            className="justify-start"
            onClick={onNavClick}
          >
            <Link href="/customers">
              <Users className="mr-2 h-4 w-4" />
              Customers
            </Link>
          </Button>
          <Button
            asChild
            variant={pathname === "/settings" ? "default" : "ghost"}
            className="justify-start"
            onClick={onNavClick}
          >
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  )
}