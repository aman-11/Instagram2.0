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
  callbacks: {
    //modify session callback help to get jwt tokens and bunch of things
    async session({ session, user, token }) {
      //initally session has -->{name, email, img}

      //gooing to create teh custom thing to add in the session object for instagram username
      // { user : { name: Aayush Aman } }  --> split(Aayush, Aman) --> join(AayushAman)
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      //token additional info comes from google
      session.user.uid = token.sub;

      return session;
    },
  },
});

/*************
 * TOKEN from google provider
 *  {
        "name": "Aayush Aman",
        "email": "aayushaman13@gmail.com",
        "picture": "https://lh3.googleusercontent.com/a/AATXAJzOuohGtW4RtGN0Dc8s8pYtjAjDCTX2c6ha7Ijk=s96-c",
        "sub": "104439330934690673865",
        "iat": 1648562962,
        "exp": 1651154962,
        "jti": "73afd197-2e44-4c9e-bb4b-97ac72a62d48"
    }
 * 
 */
