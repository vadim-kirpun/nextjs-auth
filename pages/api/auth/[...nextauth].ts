import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { connectToDB, verifyPassword } from '@lib';

type Credentials = {
  email: string;
  password: string;
};

export default NextAuth({
  session: { jwt: true },
  providers: [
    Providers.Credentials({
      async authorize(credentials: Credentials) {
        const { client, db } = await connectToDB();

        const user = await db
          .collection('users')
          .findOne<Credentials>({ email: credentials.email });

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
