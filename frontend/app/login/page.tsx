import Link from "next/link";
import { auth } from "../_lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "@/app/_components/LoginForm";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/app/_components/ui/Card";

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="max-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-3xl font-bold text-center text-foreground">
            Login
          </h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Welcome back! Please enter your details.
          </p>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Register here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
