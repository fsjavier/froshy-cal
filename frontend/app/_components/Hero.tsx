import Link from "next/link";
import { Button } from "@/app/_components/ui/Button";

export default function Hero() {
  return (
    <section className="text-center max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-primary mb-6 leading-tight">
        Simplify Your Family&apos;s Schedule
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Organize, collaborate, and stay connected with our intuitive family
        calendar app.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
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
    </section>
  );
}
