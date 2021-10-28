import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectToDB, verifyPassword } from '@lib';

export default NextAuth({
  session: { jwt: true },
  providers: [
    CredentialsProvider({
      credentials: undefined,
      async authorize(credentials) {
        const { client, db } = await connectToDB();

        const user = await db
          .collection('users')
          .findOne({ email: credentials.email });

        if (!user) throw new Error('No user found!');

        const isPasswordValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) throw new Error('Could not log you in!');

        await client.close();

        return { email: user.email };
      },
    }),
  ],
});
