import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials'
import type { AuthOptions } from 'next-auth'

export const options: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username: {
                label:"Username:",
                type:"text",
                placeholder:"your username"
                },
                password:{
                    label:"Password:",
                    type:"password",
                    placeholder:"your password"
                }
            },
            async authorize(credentials){
                // db here
                const user = {id : "42", name:"Dave", password: "gay"}
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                }
                else { 
                    return null
                }
            }
        })
        
    ],
 
};
