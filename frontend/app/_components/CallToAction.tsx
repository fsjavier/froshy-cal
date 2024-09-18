import Link from "next/link";
import { Button } from "@/app/_components/ui/Button";

export default function CallToAction() {
  return (
    <section className="text-center bg-primary text-primary-foreground py-16 px-4 rounded-2xl shadow-xl max-w-5xl mx-auto">
      <h3 className="text-4xl font-semibold mb-6">
        Ready to streamline your family&apos;s schedule?
      </h3>
      <Button
        asChild
        size="lg"
        variant="secondary"
        className="px-8 py-6 text-lg bg-white text-primary hover:bg-white/90"
      >
        <Link href="/register">Create Your Family Calendar</Link>
      </Button>
    </section>
  );
}
