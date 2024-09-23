import Link from "next/link";
import { User, Settings } from "lucide-react";
import { Button } from "@/app/_components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/DropdownMenu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/Avatar";
import LogoutButton from "./LogoutButton";

type UserMenuProps = {
  user: {
    avatar?: string;
    first_name: string;
    last_name: string;
    email: string;
  };
};

type MenuItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
  {
    href: "/profile",
    label: "Profile",
    icon: <User className="mr-2 h-4 w-4" />,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
];

export function UserMenu({ user }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar ?? ""} alt={user.first_name} />
            <AvatarFallback>
              {user.first_name[0]}
              {user.last_name[0]}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href} className="cursor-pointer flex items-center">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
