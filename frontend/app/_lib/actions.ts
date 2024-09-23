"use server";

import { signIn } from "@/app/_lib/auth";
import { api } from "./api";
import { AxiosError } from "axios";

interface RegistrationData {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
}

export async function registerAction(data: RegistrationData) {
  try {
    const response = await api.post("/users/register/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      return { message: "Registration successful" };
    }

    throw new Error("Unexpected response from server");
  } catch (error: unknown) {
    console.error("Registration error:", error);
    if (error instanceof AxiosError && error.response && error.response.data) {
      throw new Error(error.response.data.detail || "Registration failed");
    }
    throw new Error("Registration failed");
  }
}

export async function loginAction(email: string, password: string) {
  await signIn("credentials", {
    email,
    password,
    callbackUrl: "/dashboard",
  });
}

export async function getUserAction(token: string) {
  try {
    const user = await api.get("/users/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const userData = user.data;
    return userData;
  } catch (error) {
    console.error("Get user error:", error);
    throw error;
  }
}
