import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.GOOGLE_CLIENT_SECRET,

  //   theme: {
  //     colorScheme: "auto", // "auto" | "dark" | "light"
  //     brandColor: "#F13827", // Hex color code
  //     logo: "https://links.papareact.com/sq0",
  //   },

  //customize the page for sign
  pages: {
    signIn: "/auth/signin",
  },
});
