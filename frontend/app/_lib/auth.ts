import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserAction } from "./actions";
import { api } from "./api";
import { AxiosError } from "axios";

export const {
  auth,
  signIn,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await api.post(
            "/users/token/",
            JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = res.data;

          if (res.status === 200 && data) {
            return { ...data.user, accessToken: data.access };
          }
        } catch (error: unknown) {
          console.error("Login error:", error);
          if (
            error instanceof AxiosError &&
            error.response &&
            error.response.data
          ) {
            throw new Error(error.response.data.detail || "Login failed");
          }
          throw new Error("Login failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      const userData = await getUserAction(token.accessToken as string);
      return { ...session, user: userData };
    },
  },
  pages: {
    signIn: "/login",
  },
});
