import { userModel } from "../model/userModel.js";
import bcrypt from "bcryptjs";
export const Singup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user=await userModel.findOne({email});
        if(user)
        {
            return res.status(400).json({message:"user already exists.."});
        }
        const hashPassword=await bcrypt.hash(password,10);
        const createUser= new userModel({ fullname, email, password:hashPassword });
        await createUser.save();
        res.status(201).json({message:"user created successfully."})
    }catch(error)
    {
        console.log(error)
        res.status(500).json({message:" internal server error.."})
    }
}


export const  loginIn=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await userModel.findOne({email});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!user || !isMatch )
        {
            return res.status(400).json({message:"invalid email or password.."});
        }
        else{
             res.status(200).json({message:"login successfully.",user:{
                _id:user._id,
                fullname:user.fullname,
                password:user.password
            }});
        }
    }catch(error)
    {
        console.log(error.message);
    }
}