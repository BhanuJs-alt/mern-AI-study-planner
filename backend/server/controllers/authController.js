import User from "../models/User.js";
import bcrypt from 'bcryptjs';

export const signup = async (req,res) => {
      try {
       
        const { name ,email, password } = req.body;
        
        if(!name || !email || !password){
            return res.status(500).json({
                message:"All fields required",
            });
        }
        
        const existingUser = await User.findOne({
            email,
        });
        

        if(existingUser){  
            return res.status(400).json({
                message:"User already exist",
            });
        }
        else{
            const hashedPassword = await bcrypt.hash(password,10) ;

            const user = await User.create({
                name,
                email,
                password:hashedPassword,
            });
    
            res.status(201).json({
                message:"user created",
                user,
            });
        }

      } catch (error) {
        res.status(500).json({
            message:error.message,
        })
      }
}