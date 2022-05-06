import { PrismaClient } from "@prisma/client";
import Hash from "../Utils/Hash";

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
    async register(user: User) {
      const hash: string = await Hash().generateHashCrypto(user.password);

      const result = await prisma.user.create({
        data: {
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          password: hash,
          rules: {
            create: {
              name: "user"
            }
          }
        },
      });

      return result;
    },
  };
};
