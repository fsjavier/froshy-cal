import Link from "next/link";

type NavigationItem = {
  href: string;
  label: string;
};

type NavigationProps = {
  isLoggedIn: boolean;
};

const loggedInItems: NavigationItem[] = [
  { href: "/dashboard", label: "Dashboard" },
];

const loggedOutItems: NavigationItem[] = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
];

export function Navigation({ isLoggedIn }: NavigationProps) {
  const navigationItems = isLoggedIn ? loggedInItems : loggedOutItems;

  return (
    <nav>
      <ul className="flex space-x-6 items-center">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
