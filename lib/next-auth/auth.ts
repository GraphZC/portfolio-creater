import type { AuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import prisma from "@/lib/prisma/db";
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
		strategy: "jwt",
	},
    callbacks: {
        async jwt({ token, user }: { token: JWT, user?: User }) {
			if (user?.email) {
				return { ...token, ...user }	
			}

			return { ...token, ...user };
		},
        
        async session({ session, token, user }: { session: Session, token: JWT, user?: User }) {
            return { ...session, ...token, ...user }
        },

        async signIn({ user, account, profile }) {
            if (!user) {
                return false
            }

            const userData = await prisma.user.findFirst({
                where: {
                    email: user.email!
                }
            })

            if (!userData) {
                const created = await prisma.user.create({
                    data: {
                        email: user.email!,
                        name: user.name!,
                        username: user.email!.split('@')[0],
                        profilePicture: user.image!
                    }
                });

                if (!created) {
                    return false
                }
            } 
            user.id = userData?.id
            return true
        },
    },
}