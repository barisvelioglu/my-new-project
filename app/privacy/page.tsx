'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information to provide better services to our users. This includes:
          </p>
          <ul>
            <li>Information you provide to us (such as name, email address, etc.)</li>
            <li>Information we get from your use of our services</li>
            <li>Information from third-party sources</li>
          </ul>
          
          <h2>2. How We Use Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Develop new services</li>
            <li>Protect our users, ourselves, and our services</li>
            <li>Communicate with you about our services</li>
          </ul>
          
          <h2>3. Information Sharing</h2>
          <p>
            We do not share personal information with companies, organizations, or individuals outside of our company except in the following cases:
          </p>
          <ul>
            <li>With your consent</li>
            <li>For external processing by our trusted partners</li>
            <li>For legal reasons</li>
          </ul>
          
          <h2>4. Data Security</h2>
          <p>
            We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. In particular:
          </p>
          <ul>
            <li>We encrypt many of our services using SSL</li>
            <li>We review our information collection, storage, and processing practices</li>
            <li>We restrict access to personal information</li>
          </ul>
          
          <h2>5. Changes to This Policy</h2>
          <p>
            Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.
          </p>
          
          <h2>6. Your Rights</h2>
          <p>
            You have certain rights related to your personal data, including:
          </p>
          <ul>
            <li>The right to access your data</li>
            <li>The right to rectify your data</li>
            <li>The right to delete your data</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/signup">
              Back to Sign Up
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}