import { listingModel } from "../model/listing.js";

export const addList=async(req,res)=>{
    const {title,description,image,price,location,country}=req.body;
    const data=new listingModel({title,description,image,price,location,country});
    const result=await data.save();
    res.send(result);
    console.log(result);
}

export const getList=async(req,res)=>{
    const data=await listingModel.find();
    res.send(data);
}
