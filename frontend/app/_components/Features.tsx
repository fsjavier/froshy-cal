import { Calendar, CheckSquare, Bell, Smartphone } from "lucide-react";
import FeatureCard from "@/app/_components/FeatureCard";

export default function Features() {
  return (
    <section className="bg-card p-12 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <h3 className="text-3xl font-semibold mb-12 text-center text-secondary">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FeatureCard
          icon={Calendar}
          title="Shared Calendar"
          description="Seamlessly sync your family's schedule with a collaborative calendar accessible to all members."
        />
        <FeatureCard
          icon={CheckSquare}
          title="Smart To-Do Lists"
          description="Create, assign, and track tasks effortlessly to keep your family organized and productive."
        />
        <FeatureCard
          icon={Bell}
          title="Intelligent Reminders"
          description="Never miss an important event with our smart notification system tailored to your family's needs."
        />
        <FeatureCard
          icon={Smartphone}
          title="Responsive Design"
          description="Access your family calendar anytime, anywhere with our sleek, mobile-first interface."
        />
      </div>
    </section>
  );
}
