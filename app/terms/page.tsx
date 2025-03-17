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

export default function TermsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to My New Project. By using our service, you agree to these Terms of Service. Please read them carefully.
          </p>
          
          <h2>2. Using Our Services</h2>
          <p>
            You must follow any policies made available to you within the Services. You may use our Services only as permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
          </p>
          
          <h2>3. Privacy and Copyright Protection</h2>
          <p>
            Our privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that we can use such data in accordance with our privacy policies.
          </p>
          
          <h2>4. Your Content in Our Services</h2>
          <p>
            Our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content.
          </p>
          
          <h2>5. Modifying and Terminating Our Services</h2>
          <p>
            We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether.
          </p>
          
          <h2>6. Our Warranties and Disclaimers</h2>
          <p>
            We provide our Services using a commercially reasonable level of skill and care. But there are certain things that we don't promise about our Services.
          </p>
          
          <h2>7. Liability for Our Services</h2>
          <p>
            When permitted by law, we will not be responsible for lost profits, revenues, or data, financial losses or indirect, special, consequential, exemplary, or punitive damages.
          </p>
          
          <h2>8. About These Terms</h2>
          <p>
            We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services.
          </p>
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