import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  return (
    <>
    <div className="max-w-sm rounded-lg bg-white shadow-lg mx-auto my-20">
    <div className="flex items-center justify-between px-4 py-3 border-b">
      <h4 className="text-sm font-semibold">Sign in or create an account</h4>
    </div>

    <div className="p-6 space-y-4">
      <p className="text-sm font-semibold">Enter Your email</p>

      <Input type="email" placeholder="Email" />
      

      <Button className="w-full">Continue</Button>

      <p className="text-xs text-muted-foreground">
        By continuing, you agree to our{" "}
        <a href="#" className="text-amazon-accent hover:underline">Conditions of Use</a>
        {" "}and{" "}
        <a href="#" className="text-amazon-accent hover:underline">Privacy Notice</a>.
      </p>

      <a href="#" className="text-sm text-amazon-accent hover:underline block">Need help?</a>
    </div>
  </div>
    </>
  )
}
