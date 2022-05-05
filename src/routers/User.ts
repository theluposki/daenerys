import { Router } from "express";
import UserController from "../controllers/User"

const router = Router()

router.get("/", UserController().GetUsers)
router.post("/auth", UserController().Auth)
router.post("/register", UserController().Register)

export default router
