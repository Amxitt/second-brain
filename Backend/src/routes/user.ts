import { Router } from "express";
import { UserModel } from "../db.js";
import bcrypt from "bcrypt"
import { validate } from "../middleware/validate.js";
import { JWT_PASSWORD } from "../config.js";
import  jwt  from "jsonwebtoken";
import { success } from "zod";


const userRouter = Router();


userRouter.post("/signup",validate, async (req, res)=>{
    const { username , password } = req.body;

    const findUser = await UserModel.findOne({email: username});
    if(findUser){
        return res.status(403).json({
            success: false,
            message: "User already exists with this username"
        })
    }
    try{
        const hashpassword = await bcrypt.hash(password, 5);
        await UserModel.create({email: username , password: hashpassword})
        res.status(200).json({
            success: true,
            message: "You are signed up Successfully"
        })
    } catch(e){
        res.status(500).json({
            success: false,
            message: "server error"
        });
    };
});

userRouter.post("/signin", validate, async (req, res) => {
    const {username , password } = req.body;
    try{
        const user = await UserModel.findOne({email: username})
        if(!user){
            return res.status(403).json({
                message:"wrong email password"
            })
        }

        const isGenuine = await bcrypt.compare(password, user.password);
        if(!isGenuine){
            return res.status(403).json({
                message: "wrong email or password"
            })
        }
        const token = jwt.sign({id: user._id}, JWT_PASSWORD)
        console.log(token);
        res.cookie("token", token ,{
                httpOnly: true
            }).status(200).json({
                success: true,
                message: "you are signed in"
            })
    }catch(e){
        res.status(500).json({
            message: "internal server error"
        })
    }
})

export default userRouter;