import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardClient() {
  const bookings = [
    { id: 1, service: "Haircut", date: "Fri, Aug 22", time: "10:30", status: "Upcoming" },
    { id: 2, service: "Beard Trim", date: "Mon, Aug 12", time: "14:30", status: "Completed" },
  ];

  return (
    <main className="min-h-screen bg-background px-4 py-8 max-w-5xl mx-auto">
      <SEO title="Your Dashboard — LuxBarber" description="Manage upcoming and past bookings." />
      <h1 className="font-display text-3xl mb-6">Client Dashboard</h1>
      <div className="grid gap-4">
        {bookings.map(b => (
          <Card key={b.id}>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="font-display text-xl">{b.service}</CardTitle>
              <Badge variant="secondary">{b.status}</Badge>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm">
              <div>{b.date} · {b.time}</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Reschedule</Button>
                <Button variant="destructive" size="sm">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
