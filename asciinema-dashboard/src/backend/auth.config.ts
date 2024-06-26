import { type AuthConfig } from "@auth/core"
import GitHub from "@auth/express/providers/github"
import Google from "@auth/express/providers/google"

export const authConfig: AuthConfig = {
  trustHost: true,
  useSecureCookies: false,
  secret: process.env.SECRET,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    //Google({
    //  clientId: process.env.AUTH_GOOGLE_ID,
    //  clientSecret: process.env.AUTH_GOOGLE_SECRET,
    //}),
  ],
}