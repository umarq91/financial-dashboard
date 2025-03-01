import { ActivityChart } from "@/components/dashboard/activity-chart"
import { Header } from "@/components/dashboard/header"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { PerformanceRadarChart } from "@/components/dashboard/radar-chart"
import { SalesFunnelChart } from "@/components/dashboard/funnel-chart"
import { ProductPerformanceChart } from "@/components/dashboard/scatter-chart"
import { Sidebar } from "@/components/dashboard/sidebar"
import { StatsCards } from "@/components/dashboard/stats-cards"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <main className="flex flex-col gap-6 p-6 md:gap-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCards />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <OverviewChart />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ActivityChart />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <PerformanceRadarChart />
            <SalesFunnelChart />
            <ProductPerformanceChart />
          </div>
        </main>
      </div>
    </div>
  )
}