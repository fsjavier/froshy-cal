"use client";

import { useSession } from "next-auth/react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

interface User {
  email: string;
  avatar?: string;
  firstName: string;
  lastName: string;
}

export default function Header() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-6">
          <Navigation isLoggedIn={!!user} />
          {user && <UserMenu user={user as User} />}
        </div>
      </div>
    </header>
  );
}
