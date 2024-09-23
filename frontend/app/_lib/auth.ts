import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserAction, loginAction } from "./actions";

export const {
  auth,
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
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const data = await loginAction(
          credentials?.email,
          credentials?.password
        );
        return data;
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
