import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Register() {
  return (
    <>
    <div className="max-w-sm mx-auto my-20 rounded-lg bg-white shadow-lg">
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Create Account</h1>

      {/* Mobile number */}
      <div className="space-y-1">
        <Label htmlFor="phone">Mobile number</Label>
        <div className="flex gap-2">
          <Select defaultValue="EG">
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EG">EG +20</SelectItem>
              <SelectItem value="US">US +1</SelectItem>
              <SelectItem value="GB">GB +44</SelectItem>
              <SelectItem value="SA">SA +966</SelectItem>
              <SelectItem value="AE">AE +971</SelectItem>
            </SelectContent>
          </Select>
          <Input id="phone" type="tel" placeholder="Mobile number" className="flex-1" />
        </div>
      </div>

      {/* Name */}
      <div className="space-y-1">
        <Label htmlFor="name">Your name</Label>
        <Input id="name" type="text" placeholder="First and last name" />
      </div>

      {/* Password */}
      <div className="space-y-1">
        <Label htmlFor="password">Password (at least 6 characters)</Label>
        <Input id="password" type="password" />
      </div>

      {/* Confirm password */}
      <div className="space-y-1">
        <Label htmlFor="confirm-password">Re-enter password</Label>
        <Input id="confirm-password" type="password" />
      </div>

      <Button className="w-full">Verify mobile number</Button>

      <Separator />

      <p className="text-sm">
        Already a customer?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Sign in instead
        </Link>
      </p>

      <p className="text-xs text-muted-foreground">
        By creating an account, you agree to our{" "}
        <a href="#" className="text-primary hover:underline">Conditions of Use</a>
        {" "}and{" "}
        <a href="#" className="text-primary hover:underline">Privacy Notice</a>.
      </p>
    </div>
  </div>
    </>
  )
}
