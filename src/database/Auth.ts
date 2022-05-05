import { PrismaClient } from "@prisma/client";
import Hash from "../Utils/Hash"

const prisma = new PrismaClient();

export default () => {
  return {
    async authenticate(email: string, password: string) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return {
          messagem: "Usuário ou Senha inválida!",
          status: 400,
        };
      }
      const isPassword: boolean = Hash().compareHashCrypto(
        password,
        user.password
      );

      if (!isPassword) {
        return {
          messagem: "Usuário ou Senha inválida!",
          status: 400,
        };
      }
      return user;
    },
  };
};
