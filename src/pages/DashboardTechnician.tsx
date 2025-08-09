import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardTechnician() {
  const schedule = [
    { time: "09:00", client: "J. Park", service: "Haircut" },
    { time: "10:30", client: "M. Lee", service: "Shave" },
    { time: "13:00", client: "S. Cruz", service: "Beard Trim" },
  ];

  return (
    <main className="min-h-screen bg-background px-4 py-8 max-w-5xl mx-auto">
      <SEO title="Technician Schedule — LuxBarber" description="View and manage your daily schedule." />
      <h1 className="font-display text-3xl mb-6">Technician Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Today</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-3">
          {schedule.map((s, i) => (
            <div key={i} className="rounded-md border border-border p-3">
              <div className="text-sm text-muted-foreground">{s.time}</div>
              <div className="font-medium">{s.client}</div>
              <div className="text-sm">{s.service}</div>
              <div className="mt-2 text-xs text-muted-foreground">Complete / No-show (coming soon)</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
