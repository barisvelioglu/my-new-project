'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { DashboardNav } from '@/components/ui/dashboard-nav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    // Redirect if not authenticated and not loading
    if (!isAuthenticated && !loading) {
      router.push('/login')
    }
  }, [isAuthenticated, loading, router])
  
  // Show nothing while checking authentication
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }
  
  // Render nothing if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null
  }
  
  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardNav />
      <main className="ml-64 flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  )
}