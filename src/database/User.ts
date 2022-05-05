import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  id?: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export default () => {
  return {
    async findAllUsers() {
      const result = await prisma.user.findMany({
        select: {
          name: true,
          lastname: true,
          email: true,
        },
      });
      return result;
    },
  };
};
