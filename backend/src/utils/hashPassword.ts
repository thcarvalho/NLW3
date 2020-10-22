import bcrypt from 'bcrypt';

export default async function (password: string) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}