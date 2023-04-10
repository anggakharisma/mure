import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      clientId: process.env.GOOGLE_CLIENT_ID as string
    })
  ]
};
export default NextAuth(authOptions);
