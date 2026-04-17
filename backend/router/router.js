import express from "express";
import { addList, getList } from "../controller/controller.js";

export const router=express.Router();

router.post("/insert",addList);
router.get("/get",getList);