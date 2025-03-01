"use client"

import { 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer, 
  Scatter, 
  ScatterChart, 
  Tooltip, 
  XAxis, 
  YAxis, 
  ZAxis 
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data01 = [
  { x: 10, y: 30, z: 200, name: 'Product A' },
  { x: 40, y: 50, z: 400, name: 'Product B' },
  { x: 30, y: 70, z: 300, name: 'Product C' },
  { x: 50, y: 30, z: 600, name: 'Product D' },
  { x: 70, y: 90, z: 500, name: 'Product E' },
  { x: 60, y: 110, z: 450, name: 'Product F' },
  { x: 90, y: 70, z: 700, name: 'Product G' },
]

const data02 = [
  { x: 20, y: 40, z: 150, name: 'Service A' },
  { x: 10, y: 90, z: 250, name: 'Service B' },
  { x: 50, y: 60, z: 350, name: 'Service C' },
  { x: 40, y: 80, z: 450, name: 'Service D' },
  { x: 80, y: 30, z: 550, name: 'Service E' },
  { x: 30, y: 100, z: 650, name: 'Service F' },
  { x: 70, y: 50, z: 750, name: 'Service G' },
]

export function ProductPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Performance</CardTitle>
        <CardDescription>
          Comparing price (x), customer satisfaction (y), and sales volume (z)
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Price" 
              unit="$" 
              domain={[0, 100]} 
              label={{ value: 'Price ($)', position: 'bottom', offset: 0 }}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Satisfaction" 
              unit="%" 
              domain={[0, 120]} 
              label={{ value: 'Satisfaction (%)', angle: -90, position: 'left' }}
            />
            <ZAxis 
              type="number" 
              dataKey="z" 
              range={[60, 400]} 
              name="Sales" 
              unit=" units" 
            />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: 'var(--radius)',
                color: 'hsl(var(--card-foreground))'
              }} 
              formatter={(value: any, name: any) => {
                if (name === 'Price') return [`${value}$`, name];
                if (name === 'Satisfaction') return [`${value}%`, name];
                if (name === 'Sales') return [`${value} units`, name];
                return [value, name];
              }}
            />
            <Legend />
            <Scatter 
              name="Products" 
              data={data01} 
              fill="hsl(var(--chart-1))" 
              animationDuration={1500}
              animationBegin={0}
            />
            <Scatter 
              name="Services" 
              data={data02} 
              fill="hsl(var(--chart-2))" 
              animationDuration={1500}
              animationBegin={300}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}