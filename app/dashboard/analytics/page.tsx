'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          View insights and performance metrics
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <div className="mt-4 h-[120px] w-full bg-gray-100 rounded-md flex items-center justify-center text-muted-foreground">
              User Growth Chart
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$54,321</div>
            <div className="mt-4 h-[120px] w-full bg-gray-100 rounded-md flex items-center justify-center text-muted-foreground">
              Revenue Chart
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <div className="mt-4 h-[120px] w-full bg-gray-100 rounded-md flex items-center justify-center text-muted-foreground">
              Sessions Chart
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>Where your visitors are coming from</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] bg-gray-100 rounded-md flex items-center justify-center text-muted-foreground">
            Traffic Sources Chart
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Home Page', 'Product Page', 'Pricing Page', 'Contact Page', 'About Us'].map((page, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div className="flex items-center">
                    <div className="mr-4 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{page}</div>
                      <div className="text-sm text-muted-foreground">
                        {Math.floor(Math.random() * 10000)} visitors
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    {Math.floor(Math.random() * 100) / 10}% CTR
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>User Devices</CardTitle>
            <CardDescription>Device breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Desktop', percentage: 64 },
                { name: 'Mobile', percentage: 28 },
                { name: 'Tablet', percentage: 8 }
              ].map((device, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{device.name}</div>
                    <div className="text-muted-foreground">{device.percentage}%</div>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Export Data</Button>
        <Button variant="outline">Print Report</Button>
        <Button>Generate PDF</Button>
      </div>
    </div>
  )
}