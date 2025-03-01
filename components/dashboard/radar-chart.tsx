"use client"

import { 
  PolarAngleAxis, 
  PolarGrid, 
  PolarRadiusAxis, 
  Radar, 
  RadarChart, 
  ResponsiveContainer, 
  Tooltip 
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { subject: 'Marketing', A: 120, B: 110, fullMark: 150 },
  { subject: 'Research', A: 98, B: 130, fullMark: 150 },
  { subject: 'Development', A: 86, B: 130, fullMark: 150 },
  { subject: 'Customer Support', A: 99, B: 100, fullMark: 150 },
  { subject: 'Sales', A: 85, B: 90, fullMark: 150 },
  { subject: 'Operations', A: 65, B: 85, fullMark: 150 },
]

export function PerformanceRadarChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Department Performance</CardTitle>
        <CardDescription>
          Comparing current vs previous quarter
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))' }} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar 
              name="Current Quarter" 
              dataKey="A" 
              stroke="hsl(var(--chart-1))" 
              fill="hsl(var(--chart-1))" 
              fillOpacity={0.6}
              animationDuration={1500}
              animationBegin={0}
            />
            <Radar 
              name="Previous Quarter" 
              dataKey="B" 
              stroke="hsl(var(--chart-2))" 
              fill="hsl(var(--chart-2))" 
              fillOpacity={0.6}
              animationDuration={1500}
              animationBegin={300}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--card-foreground))'
              }} 
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}