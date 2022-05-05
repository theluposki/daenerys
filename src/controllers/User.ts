import User from "../database/User";
import Auth from "../database/Auth";
import Register from "../database/Register";
import { Request, Response } from "express";

export default () => {
  return {
    async Auth(req: Request, res: Response) {
      const { email, password } = req.body;
      try {
        const result = await Auth().authenticate(email, password);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({
          messagem: "Error ao se autenticar",
          status: 400,
          error,
        });
      }
    },
    async Register(req: Request, res: Response) {
      const body = req.body;
      try {
        const result = await Register().register(body);
        res.status(201).json(result);
      } catch (error) {
        res.status(400).json({
          messagem: "Error ao registrar usuário.",
          status: 400,
          error,
        });
      }
    },
    async GetUsers(req: Request, res: Response) {
      try {
        const result = await User().findAllUsers();
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({
          messagem: "Erro ao buscar usuários",
          status: 400,
          error,
        });
      }
    },
  };
};
