import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDB, hashPassword } from '@lib';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return;

  const { email, password } = req.body;

  const isEmailValid = email?.includes('@');
  const isPasswordValid = password?.trim().length >= 7;

  if (!isEmailValid || !isPasswordValid) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long',
    });
    return;
  }

  const { client, db } = await connectToDB();

  const hashedPassword = await hashPassword(password);

  await db.collection('users').insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user!' });

  await client.close();
};