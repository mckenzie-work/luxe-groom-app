import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardAdmin() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 max-w-6xl mx-auto">
      <SEO title="Admin — LuxBarber" description="Manage services, staff, and view analytics." />
      <h1 className="font-display text-3xl mb-6">Admin Dashboard</h1>
      <Tabs defaultValue="services" className="space-y-4">
        <TabsList>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          <Card>
            <CardHeader><CardTitle className="font-display">Services</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">Add/edit/delete services (coming soon)</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="staff">
          <Card>
            <CardHeader><CardTitle className="font-display">Staff Profiles</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">Manage staff (coming soon)</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader><CardTitle className="font-display">Analytics</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">Bookings per day, revenue, performance (coming soon)</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
