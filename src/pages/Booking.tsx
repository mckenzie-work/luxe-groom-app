import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import s1 from "@/assets/stylist-1.jpg";
import s2 from "@/assets/stylist-2.jpg";
import s3 from "@/assets/stylist-3.jpg";

const services = [
  { id: "haircut", name: "Haircut", duration: 45, price: 60 },
  { id: "shave", name: "Shave", duration: 30, price: 40 },
  { id: "beard", name: "Beard Trim", duration: 20, price: 30 },
];

const stylists = [
  { id: "alex", name: "Alex Morgan", rating: 4.9, img: s1, bio: "Precision cuts and classic fades." },
  { id: "riley", name: "Riley Chen", rating: 4.8, img: s2, bio: "Hot towel shave specialist." },
  { id: "noah", name: "Noah Patel", rating: 4.7, img: s3, bio: "Modern styles with clean lines." },
];

const times = ["09:00", "09:45", "10:30", "11:15", "13:00", "13:45", "14:30", "15:15", "16:00"];

type Step = 1 | 2 | 3 | 4;

export default function Booking() {
  const [step, setStep] = useState<Step>(1);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [stylistId, setStylistId] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string | undefined>();

  const service = services.find(s => s.id === serviceId) || null;
  const stylist = stylists.find(s => s.id === stylistId) || null;

  const canNext = () => {
    if (step === 1) return !!serviceId;
    if (step === 2) return !!stylistId;
    if (step === 3) return !!date && !!time;
    return true;
  };

  const goNext = () => setStep((prev) => (prev === 4 ? 4 : ((prev + 1) as Step)));
  const goBack = () => setStep((prev) => (prev === 1 ? 1 : ((prev - 1) as Step)));

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Book Appointment — LuxBarber" description="Select service, stylist, date and time. Review and confirm your luxury grooming appointment." />

      {/* Progress */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-2 text-sm">
          {[1,2,3,4].map(n => (
            <div key={n} className={`flex-1 h-1 rounded-full ${step >= n ? 'bg-foreground' : 'bg-muted'}`} />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Step content */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Select Service</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {services.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setServiceId(s.id)}
                    className={`text-left rounded-lg border p-4 transition hover:shadow ${serviceId===s.id ? 'border-foreground' : 'border-border'}`}
                  >
                    <div className="font-medium">{s.name}</div>
                    <div className="text-sm text-muted-foreground">{s.duration} min</div>
                    <div className="mt-2 text-sm">${s.price}</div>
                  </button>
                ))}
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Choose Stylist</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stylists.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setStylistId(s.id)}
                    className={`text-left rounded-lg border p-3 transition hover:shadow ${stylistId===s.id ? 'border-foreground' : 'border-border'}`}
                  >
                    <img src={s.img} alt={s.name} className="w-full h-36 object-cover rounded-md mb-3" loading="lazy" />
                    <div className="font-medium">{s.name}</div>
                    <div className="text-sm text-muted-foreground">⭐ {s.rating} · {s.bio}</div>
                  </button>
                ))}
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Pick Date & Time</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
                <div>
                  <div className="mb-2 text-sm text-muted-foreground">Available times</div>
                  <Select onValueChange={setTime} value={time}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {times.map(t => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Review & Confirm</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">Service: <span className="font-medium">{service?.name}</span></div>
                <div className="text-sm">Stylist: <span className="font-medium">{stylist?.name}</span></div>
                <div className="text-sm">Date: <span className="font-medium">{date?.toDateString()}</span></div>
                <div className="text-sm">Time: <span className="font-medium">{time}</span></div>
                <div className="pt-3"><Button className="w-full">Confirm Booking</Button></div>
              </CardContent>
            </Card>
          )}

          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={goBack} disabled={step===1}>Back</Button>
            <Button onClick={goNext} disabled={!canNext()}>{step===4? 'Finish' : 'Next'}</Button>
          </div>
        </div>

        {/* Summary */}
        <aside className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              <div>Service: <span className="font-medium">{service?.name ?? '-'}</span></div>
              <div>Stylist: <span className="font-medium">{stylist?.name ?? '-'}</span></div>
              <div>Date: <span className="font-medium">{date ? date.toDateString() : '-'}</span></div>
              <div>Time: <span className="font-medium">{time ?? '-'}</span></div>
              {service && <div className="pt-2">Total: <span className="font-medium">${service.price}</span></div>}
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
