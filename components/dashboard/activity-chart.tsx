"use client"

import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { hour: '00:00', visits: 240, conversions: 20 },
  { hour: '03:00', visits: 180, conversions: 15 },
  { hour: '06:00', visits: 150, conversions: 12 },
  { hour: '09:00', visits: 450, conversions: 50 },
  { hour: '12:00', visits: 750, conversions: 90 },
  { hour: '15:00', visits: 850, conversions: 100 },
  { hour: '18:00', visits: 650, conversions: 80 },
  { hour: '21:00', visits: 350, conversions: 40 },
]

export function ActivityChart() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Daily Activity</CardTitle>
        <CardDescription>
          Hourly website traffic and conversion rates
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="hour" />
            <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-1))" />
            <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-2))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--card-foreground))'
              }} 
            />
            <Legend />
            <Bar 
              yAxisId="left" 
              dataKey="visits" 
              fill="hsl(var(--chart-1))" 
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
              animationBegin={0}
              name="Visits"
            />
            <Bar 
              yAxisId="right" 
              dataKey="conversions" 
              fill="hsl(var(--chart-2))" 
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
              animationBegin={300}
              name="Conversions"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}