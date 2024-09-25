import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { api } from "./api";

interface CustomUser {
  accessToken: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
  interface User {
    firstName?: string;
    lastName?: string;
    avatar?: string;
  }
}

export const { auth, signIn, handlers } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const payload = {
            email: credentials.email,
            password: credentials.password,
          };
          const res = await api.post("/users/token/", payload);
          const data = res.data;

          if (data && data.user && data.access) {
            return { ...data.user, accessToken: data.access } as CustomUser;
          }
          return null;
        } catch (error: unknown) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as CustomUser;
        token.accessToken = customUser.accessToken;
        token.email = customUser.email;
        token.firstName = customUser.first_name;
        token.lastName = customUser.last_name;
        token.avatar = customUser.avatar;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.sub as string,
        email: token.email as string,
        firstName: token.firstName as string,
        lastName: token.lastName as string,
        avatar: token.avatar as string,
        emailVerified: token.emailVerified as Date | null,
      };
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
