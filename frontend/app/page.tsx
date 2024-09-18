import Link from "next/link";
import { Calendar, CheckSquare, Bell, Smartphone } from "lucide-react";
import { Button } from "@/app/_components/ui/Button";
import FeatureCard from "@/app/_components/ui/FeatureCard";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-primary mb-6 leading-tight">
          Simplify Your Family&apos;s Schedule
        </h2>

        <div className="my-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-lg"
          >
            <Link href="/register">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-lg"
          >
            <Link href="/login">Log In</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureCard
            icon={<Calendar className="h-8 w-8 text-primary" />}
            title="Shared Calendar"
            description="Seamlessly sync your family's schedule with a collaborative calendar accessible to all members."
          />
          <FeatureCard
            icon={<CheckSquare className="h-8 w-8 text-secondary" />}
            title="Smart To-Do Lists"
            description="Create, assign, and track tasks effortlessly to keep your family organized and productive."
          />
          <FeatureCard
            icon={<Bell className="h-8 w-8 text-accent" />}
            title="Intelligent Reminders"
            description="Never miss an important event with our smart notification system tailored to your family's needs."
          />
          <FeatureCard
            icon={<Smartphone className="h-8 w-8 text-secondary" />}
            title="Responsive Design"
            description="Access your family calendar anytime, anywhere with our sleek, mobile-first interface."
          />
        </div>
      </section>
    </div>
  );
}
