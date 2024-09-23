"use client";

import { useState } from "react";
import { Input } from "@/app/_components/ui/Input";
import { Button } from "@/app/_components/ui/Button";
import { Label } from "@/app/_components/ui/Label";
import { Loader2 } from "lucide-react";
import { loginAction } from "../_lib/actions";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "user@example.com",
    password: "123456qwertz",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await loginAction(formData.email, formData.password);
      router.push("/dashboard");
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {["email", "password"].map((field) => (
        <div key={field} className="space-y-2">
          <Label htmlFor={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </Label>
          <Input
            type={field}
            id={field}
            name={field}
            value={formData[field as keyof FormData]}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full transition-all duration-200 ease-in-out focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      ))}
      {error && <p className="text-destructive text-sm">{error}</p>}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing In...
          </>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
}
