import express from "express";
import { loginIn, Singup } from "../controller/userController.js";
export const userRouter=express.Router();

userRouter.post("/singup",Singup);
userRouter.post("/login",loginIn);