import bcrypt from "bcryptjs";
import prisma from "../db/prisma";

const SALT_ROUNDS = 12;

export async function createUser(
  email: string,
  password: string,
  name?: string,
) {
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
  return prisma.user.create({
    data: {
      email: email.toLowerCase().trim(),
      passwordHash,
      name,
    },
    select: { id: true, email: true, name: true, createdAt: true },
  });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email: email.toLowerCase().trim() },
    select: { id: true, email: true, name: true, passwordHash: true },
  });
}

export async function findUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: { id: true, email: true, name: true },
  });
}

export async function verifyPassword(
  plain: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
