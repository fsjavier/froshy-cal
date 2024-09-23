import Hero from "@/app/_components/Hero";
import Features from "@/app/_components/Features";
import { redirect } from "next/navigation";
import { auth } from "@/app/_lib/auth";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="space-y-10">
      <Hero />
      <Features />
    </div>
  );
}
