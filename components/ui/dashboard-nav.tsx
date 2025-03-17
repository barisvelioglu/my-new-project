'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  User, 
  Settings, 
  LogOut,
  BarChart2
} from 'lucide-react'

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
}

export function DashboardNav() {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  
  const navItems: NavItem[] = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: <Home className="w-5 h-5" />
    },
    {
      href: '/dashboard/profile',
      label: 'Profile',
      icon: <User className="w-5 h-5" />
    },
    {
      href: '/dashboard/analytics',
      label: 'Analytics',
      icon: <BarChart2 className="w-5 h-5" />
    },
    {
      href: '/dashboard/settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />
    }
  ]
  
  return (
    <nav className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 p-4">
      <div className="flex flex-col h-full">
        <div className="pb-6">
          <h1 className="text-2xl font-bold mb-1">My Project</h1>
          {user && (
            <p className="text-sm text-gray-400">Welcome, {user.name}</p>
          )}
        </div>
        
        <div className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    pathname === item.href 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-6">
          <Button 
            variant="ghost" 
            className="w-full flex items-center justify-start gap-3 text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={logout}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}