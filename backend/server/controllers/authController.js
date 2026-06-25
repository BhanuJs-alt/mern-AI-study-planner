import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
            const hashedPassword = await bcrypt.hash(password,10) ;

            const user = await User.create({
                name,
                email,
                password:hashedPassword,
            });
    
            res.status(201).json({
                message:"sign up successfully please login",
            });

      } catch (error) {
        res.status(500).json({
            message:error.message,
        })
      }
}

export const login = async(req,res) => {
        try {  
           const { email,password } = req.body;

            if(!email || !password){
                res.status(400).json({
                    message:"email and password are required"
                });
            }
           const user = await User.findOne({ email });

           const isMatch = await bcrypt.compare(
            password,
            user.password
           );

           if(!user || !isMatch){
             return res.status(400).json({
                message:"Invalid ceredentials"
            });
           }

            const token = jwt.sign(
                {
                 userId : user._id,
                },
                process.env.JWT_SECRET,
                {
                 expiresIn:"7d"
                }
            );
 
             res.status(200).json({
                 message: "Login successful",
                 token,
             });
          
        } catch (error) {
            res.status(500).json({
                message:error.message,
            });
        }
}