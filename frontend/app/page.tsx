import Hero from "@/app/_components/Hero";
import Features from "@/app/_components/Features";
import CallToAction from "@/app/_components/CallToAction";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
}
