import mongoose from "mongoose";

export const dbConnect=async()=>{
    const connect=await  mongoose.connect("mongodb://localhost:27017/wonder_lust");
    if(connect) console.log("db connected successfully...");
}