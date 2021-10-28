import type { NextApiRequest, NextApiResponse } from 'next';

import { connectToDB, hashPassword } from '@lib';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
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

  const existingUser = await db.collection('users').findOne({ email });

  if (existingUser) {
    res.status(422).json({ message: 'User already exists!' });
    await client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  await db.collection('users').insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created user!' });

  await client.close();
};
