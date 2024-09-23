import { auth } from "../_lib/auth";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

interface User {
  email: string;
  avatar?: string;
  first_name: string;
  last_name: string;
}

export default async function Header() {
  const session = await auth();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center space-x-6">
          <Navigation isLoggedIn={!!session?.user} />
          {session?.user && <UserMenu user={session.user as User} />}
        </div>
      </div>
    </header>
  );
}
