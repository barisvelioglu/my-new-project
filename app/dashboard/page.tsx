'use client'

import { useAuth } from '@/contexts/auth-context'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react'

// Dashboard stat card component
function StatCard({ 
  title, 
  value, 
  description, 
  icon, 
  trendValue, 
  trendLabel 
}: { 
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trendValue: string
  trendLabel: string
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        <div className="flex items-center mt-4">
          <div className="flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
            <TrendingUp className="mr-1 h-3 w-3" />
            {trendValue}
          </div>
          <p className="text-xs text-muted-foreground ml-2">{trendLabel}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Dashboard() {
  const { user } = useAuth()
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome back, {user?.name}! Here&apos;s an overview of your account.
      </p>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          description="Total revenue for this month"
          icon={<DollarSign className="h-5 w-5" />}
          trendValue="+20.1%"
          trendLabel="from last month"
        />
        <StatCard
          title="Active Users"
          value="2,542"
          description="Active users this month"
          icon={<Users className="h-5 w-5" />}
          trendValue="+15.2%"
          trendLabel="from last month"
        />
        <StatCard
          title="Engagement"
          value="85.3%"
          description="User engagement rate"
          icon={<Activity className="h-5 w-5" />}
          trendValue="+5.4%"
          trendLabel="from last week"
        />
        <StatCard
          title="New Subscriptions"
          value="624"
          description="New subscriptions this month"
          icon={<TrendingUp className="h-5 w-5" />}
          trendValue="+12.7%"
          trendLabel="from last month"
        />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent activity across the platform</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="px-6 py-4 border-t">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">New login detected</p>
                  <p className="text-sm text-muted-foreground">Login from Chrome on Windows</p>
                </div>
                <div className="ml-auto text-xs text-muted-foreground">2 min ago</div>
              </div>
            </div>
            <div className="px-6 py-4 border-t">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Profile updated</p>
                  <p className="text-sm text-muted-foreground">You updated your profile information</p>
                </div>
                <div className="ml-auto text-xs text-muted-foreground">1 hour ago</div>
              </div>
            </div>
            <div className="px-6 py-4 border-t">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                  <DollarSign className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Subscription renewed</p>
                  <p className="text-sm text-muted-foreground">Your subscription has been renewed</p>
                </div>
                <div className="ml-auto text-xs text-muted-foreground">Yesterday</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Account Summary</CardTitle>
            <CardDescription>Your account status and details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Account Type</p>
                <p className="text-sm text-muted-foreground">Premium Plan</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Billing Cycle</p>
                <p className="text-sm text-muted-foreground">Monthly</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Next Payment</p>
                <p className="text-sm text-muted-foreground">April 15, 2023</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Account Status</p>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-sm text-muted-foreground">Active</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}