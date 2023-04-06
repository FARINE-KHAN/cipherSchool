import express  from "express";
import {registerUser,login,passwordUpdate} from "./controller/userController.js";
const router = express.Router()

router.post("/register",registerUser)
router.post("/login",login)
router.put("/updatePassword/:user",passwordUpdate)


export default router;