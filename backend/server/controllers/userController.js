import User from "../models/User.js";

export const getUser = async (req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
     }
    catch (error) {
        console.log(error.message);
    }
}