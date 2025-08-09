import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <main className="min-h-screen grid place-items-center px-4 bg-background">
      <SEO title="Login — LuxBarber" description="Client login for booking and managing appointments." />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-display text-2xl">Client Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="w-full">Sign in</Button>
          <div className="text-xs text-muted-foreground text-center">Or continue with mobile OTP (coming soon)</div>
        </CardContent>
      </Card>
    </main>
  );
}
