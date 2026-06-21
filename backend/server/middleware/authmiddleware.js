import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = async (req,res,next)=>{
    try {
        const authHeader = req.headers.authorization;
        console.log(authHeader);

        if(!authHeader){
            return res.status(400).json({
                message:"No token provided",
            })
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = await User.findById(decoded.userId);
        next();
    } catch (error) {
        res.status(401).json({
            message:"Unauthorised",
        });
    }
}

export default authMiddleware;