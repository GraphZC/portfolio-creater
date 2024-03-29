import { UserRole } from "@/enum/UserRole";
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt"

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    refreshTokenExpires?: number;
    id: string;
    user?: User;
  }

  interface User {
    id?: string;
    email?: string;
    name?: string;
    image?: string;
  }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
      refreshTokenExpires?: number;
      accessTokenExpires?:  number;
      refreshToken?: string;
      accessToken?: string;
      exp?: number;
      iat?: number;
      jti?: string;
    }
  }