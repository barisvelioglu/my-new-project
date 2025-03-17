'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Github, Mail } from 'lucide-react'

export function SignupPage() {
  return (
    <div className="grid w-full min-h-screen items-center px-4 sm:justify-center bg-background">
      <Card className="w-full sm:w-96">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your information to sign up</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-y-4">
          <div className="grid grid-cols-2 gap-x-4">
            <Button size="sm" variant="outline" type="button">
              <Github className="mr-2 size-4" />
              GitHub
            </Button>
            <Button size="sm" variant="outline" type="button">
              <Mail className="mr-2 size-4" />
              Google
            </Button>
          </div>
          
          <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
            or
          </p>
          
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="John Doe" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" required />
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              required
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
        </CardContent>
        
        <CardFooter>
          <div className="grid w-full gap-y-4">
            <Button>Create account</Button>
            <Button variant="link" size="sm" asChild>
              <Link href="/login">
                Already have an account? Sign in
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}