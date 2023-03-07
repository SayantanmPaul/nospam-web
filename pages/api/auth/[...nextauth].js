import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '@/database/credentials';
import { connect } from 'mongoose';
import Users from '@/model/schema';
import { compare } from 'bcryptjs';

export default NextAuth({
  providers: [
    // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // github provider
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: 'Connection Failed!';
        });
        //check user exists
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error('No user found with this email !');
        }

        //compare password
        const checkPassword = await compare(credentials.password, result.password);

        //incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new error("Username or Password didn't match!");
        }
        return result;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
});
