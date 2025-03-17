'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Bell, Globe, Shield, Moon, Sun } from 'lucide-react'

interface ToggleOption {
  id: string
  label: string
  description: string
  enabled: boolean
}

function ToggleItem({ option, onChange }: { option: ToggleOption, onChange: (id: string, enabled: boolean) => void }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="space-y-0.5">
        <Label htmlFor={option.id} className="text-base">{option.label}</Label>
        <p className="text-sm text-muted-foreground">
          {option.description}
        </p>
      </div>
      <div className="ml-4">
        <label 
          htmlFor={option.id} 
          className="relative inline-flex cursor-pointer items-center"
        >
          <input
            type="checkbox"
            id={option.id}
            className="peer sr-only"
            checked={option.enabled}
            onChange={() => onChange(option.id, !option.enabled)}
          />
          <div className="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-primary peer-focus:ring-4 peer-focus:ring-primary/20"></div>
          <div className="absolute left-1 top-1 h-4 w-4 transform rounded-full bg-white transition peer-checked:translate-x-5"></div>
        </label>
      </div>
    </div>
  )
}

export default function SettingsPage() {
  const [notificationSettings, setNotificationSettings] = useState<ToggleOption[]>([
    {
      id: 'email-notifications',
      label: 'Email Notifications',
      description: 'Receive email notifications for important updates',
      enabled: true,
    },
    {
      id: 'push-notifications',
      label: 'Push Notifications',
      description: 'Receive push notifications on your devices',
      enabled: true,
    },
    {
      id: 'marketing-emails',
      label: 'Marketing Emails',
      description: 'Receive marketing and promotional emails',
      enabled: false,
    },
  ])
  
  const [securitySettings, setSecuritySettings] = useState<ToggleOption[]>([
    {
      id: 'two-factor-auth',
      label: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      enabled: false,
    },
    {
      id: 'login-alerts',
      label: 'Login Alerts',
      description: 'Get notified when someone logs into your account',
      enabled: true,
    },
  ])
  
  const [appearanceSettings, setAppearanceSettings] = useState<ToggleOption[]>([
    {
      id: 'dark-mode',
      label: 'Dark Mode',
      description: 'Use dark theme across the application',
      enabled: false,
    },
    {
      id: 'high-contrast',
      label: 'High Contrast',
      description: 'Increase contrast for better visibility',
      enabled: false,
    },
  ])
  
  const handleNotificationChange = (id: string, enabled: boolean) => {
    setNotificationSettings(prev => 
      prev.map(setting => 
        setting.id === id ? { ...setting, enabled } : setting
      )
    )
  }
  
  const handleSecurityChange = (id: string, enabled: boolean) => {
    setSecuritySettings(prev => 
      prev.map(setting => 
        setting.id === id ? { ...setting, enabled } : setting
      )
    )
  }
  
  const handleAppearanceChange = (id: string, enabled: boolean) => {
    setAppearanceSettings(prev => 
      prev.map(setting => 
        setting.id === id ? { ...setting, enabled } : setting
      )
    )
  }
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>Configure how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-4">
            <div className="space-y-2">
              {notificationSettings.map(option => (
                <ToggleItem 
                  key={option.id} 
                  option={option} 
                  onChange={handleNotificationChange} 
                />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save Notification Settings</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle>Security</CardTitle>
            </div>
            <CardDescription>Manage your security settings</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-4">
            <div className="space-y-2">
              {securitySettings.map(option => (
                <ToggleItem 
                  key={option.id} 
                  option={option} 
                  onChange={handleSecurityChange} 
                />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save Security Settings</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Sun className="h-5 w-5 text-primary" />
                <Moon className="h-4 w-4 text-primary" />
              </div>
              <CardTitle>Appearance</CardTitle>
            </div>
            <CardDescription>Customize the look and feel</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-4">
            <div className="space-y-2">
              {appearanceSettings.map(option => (
                <ToggleItem 
                  key={option.id} 
                  option={option} 
                  onChange={handleAppearanceChange} 
                />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save Appearance Settings</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-primary" />
              <CardTitle>Language & Region</CardTitle>
            </div>
            <CardDescription>Set your language and regional preferences</CardDescription>
          </CardHeader>
          <CardContent className="border-t pt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <select
                  id="language"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                  <option value="fr-FR">French</option>
                  <option value="de-DE">German</option>
                  <option value="es-ES">Spanish</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select
                  id="timezone"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Time (US & Canada)</option>
                  <option value="CST">Central Time (US & Canada)</option>
                  <option value="MST">Mountain Time (US & Canada)</option>
                  <option value="PST">Pacific Time (US & Canada)</option>
                </select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save Language Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}