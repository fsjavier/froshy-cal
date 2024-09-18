import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
        >
          Family Calendar
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
