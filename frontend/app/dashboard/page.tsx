import React, { Suspense } from "react";
import { auth } from "@/app/_lib/auth";
import { redirect } from "next/navigation";
import { LoadingOverlay } from "../_components/LoadingOverlay";

interface User {
  id?: number;
  email: string;
  avatar?: string;
  firstName: string;
  lastName: string;
}

export default async function DashboardPage() {
  const session = await auth();
  const user: User = session?.user as User;

  if (!session) {
    redirect("/login");
  }

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome, {user.firstName}!</p>
      </div>
    </Suspense>
  );
}
