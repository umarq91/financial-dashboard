"use client"

import { Bell, Menu, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/dashboard/sidebar"
import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <Sidebar onNavClick={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold md:text-2xl">Analytics Dashboard</h1>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <form className="hidden md:flex">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-lg bg-background pl-8"
            />
          </div>
        </form>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
          <span className="sr-only">Notifications</span>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  )
}