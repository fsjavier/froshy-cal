import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import { redirect } from "next/navigation";
import { RegisterForm } from "@/app/_components/RegisterForm";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/app/_components/ui/Card";

export default async function RegisterPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="max-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-3xl font-bold text-center text-foreground">
            Register
          </h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Create your account to get started.
          </p>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Login here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
