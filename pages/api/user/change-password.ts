import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDB, hashPassword, verifyPassword } from '@lib';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== 'PATCH') return;

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Not authenticated!' });
    return;
  }

  const { email } = session.user;
  const { oldPassword, newPassword } = req.body;

  const { client, db } = await connectToDB();
  const user = await db.collection('users').findOne({ email });

  const isPasswordValid = await verifyPassword(oldPassword, user.password);

  if (!isPasswordValid) {
    res.status(422).json({ message: 'Old password is incorrect!' });
    await client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  await db.collection('users').updateOne(
    { email },
    {
      $set: { password: hashedPassword },
    }
  );

  res.status(200).json({ message: 'Password updated!' });

  await client.close();
};
