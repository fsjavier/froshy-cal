import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Family Calendar App",
  description: "A modern, mobile-first family or group calendar app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
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
        <main className="flex-grow container mx-auto px-4 py-12">
          {children}
        </main>
        <footer className="bg-muted py-12">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>&copy; 2023 Family Calendar App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
