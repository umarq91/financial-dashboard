"use client"

import { 
  Funnel, 
  FunnelChart, 
  LabelList, 
  ResponsiveContainer, 
  Tooltip 
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { value: 100, name: 'Visitors', fill: 'hsl(var(--chart-1))' },
  { value: 80, name: 'Leads', fill: 'hsl(var(--chart-2))' },
  { value: 50, name: 'Prospects', fill: 'hsl(var(--chart-3))' },
  { value: 30, name: 'Opportunities', fill: 'hsl(var(--chart-4))' },
  { value: 20, name: 'Customers', fill: 'hsl(var(--chart-5))' },
]

export function SalesFunnelChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Funnel</CardTitle>
        <CardDescription>
          Conversion stages from visitor to customer
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--card-foreground))'
              }} 
            />
            <Funnel
              dataKey="value"
              data={data}
              isAnimationActive={true}
              animationDuration={1500}
              animationBegin={0}
            >
              <LabelList 
                position="right" 
                fill="hsl(var(--foreground))" 
                stroke="none" 
                dataKey="name" 
              />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}