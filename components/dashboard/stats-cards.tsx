"use client"

import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  change: number
  changeLabel: string
  changeDirection: "up" | "down" | "neutral"
  className?: string
}

export function StatsCard({
  title,
  value,
  description,
  icon,
  change,
  changeLabel,
  changeDirection,
  className,
}: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-2">
        <div className={cn(
          "flex items-center rounded-md px-2 py-1 text-xs font-medium",
          changeDirection === "up" && "text-emerald-500 bg-emerald-500/10",
          changeDirection === "down" && "text-rose-500 bg-rose-500/10",
          changeDirection === "neutral" && "text-blue-500 bg-blue-500/10"
        )}>
          {changeDirection === "up" && <ArrowUpIcon className="mr-1 h-3 w-3" />}
          {changeDirection === "down" && <ArrowDownIcon className="mr-1 h-3 w-3" />}
          {changeDirection === "neutral" && <ArrowRightIcon className="mr-1 h-3 w-3" />}
          {change}% {changeLabel}
        </div>
      </CardFooter>
    </Card>
  )
}

export function StatsCards() {
  return (
    <>
      <StatsCard
        title="Total Revenue"
        value="$45,231.89"
        description="Total revenue this month"
        icon={<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>}
        change={12.5}
        changeLabel="from last month"
        changeDirection="up"
      />
      <StatsCard
        title="Subscriptions"
        value="+2350"
        description="Active subscriptions"
        icon={<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>}
        change={4.3}
        changeLabel="from last month"
        changeDirection="up"
      />
      <StatsCard
        title="Sales"
        value="+12,234"
        description="Total sales this month"
        icon={<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <path d="M2 10h20" />
        </svg>}
        change={1.2}
        changeLabel="from last month"
        changeDirection="down"
      />
      <StatsCard
        title="Active Users"
        value="573"
        description="Users online now"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        change={0.1}
        changeLabel="change"
        changeDirection="neutral"
      />
    </>
  )
}