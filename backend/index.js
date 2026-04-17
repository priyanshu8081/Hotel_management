import express from "express";
const app=express();
import { dbConnect } from "./dbconnect/Connect.js";
import { router } from "./router/router.js";
import cors from "cors";
import { userRouter } from "./router/userRouter.js";
const port=9000;
dbConnect();
app.use(express.json());
app.use(cors());
app.use("/new",router);
app.use("/user",userRouter)
app.listen(port,()=>{
    console.log(`app start working at ${port}`);
})