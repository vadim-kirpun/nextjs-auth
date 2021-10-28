import { hash } from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> =>
  hash(password, 12);
