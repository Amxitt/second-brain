import { Router } from "express";
import { userModel } from "../db.js";
import bcrypt from "bcrypt"
import { validate } from "../middleware/validate.js";
import { JWT_PASSWORD } from "../config.js";
import  jwt  from "jsonwebtoken";
import cookieParser from "cookie-parser";

const userRouter = Router();


userRouter.post("signup",validate, async (req, res)=>{
    const { username , password } = req.body;

    const findUser = await userModel.findOne({email: username});
    if(findUser){
        res.json({
            message: "User already exists with this username"
        })
    }
    try{
        const hashpassword = await bcrypt.hash(password, 5);
        await userModel.create({email: username , password: hashpassword})
        res.status(200).json({
            message: "You are signed up Successfully"
        })
    } catch(e){
        res.status(500).json({
            message: "could not create a user due to some error"
        });
    };
});

userRouter.post("signin", validate, async (req, res) => {
    const {username , password } = req.body;
    try{
        const user: any = await userModel.findOne({email: username})
        if(!user){
            return res.status(403).json({
                message:"user does not exists"
            })
        }

        const isGenuine = await bcrypt.compare(password, user.password);
        if(!isGenuine){
            return res.status(403).json({
                message: "wrong email or password"
            })
        }
        const token = jwt.sign({id: user._id}, JWT_PASSWORD)
        res.cookie("token", token ,{
            httpOnly: true
        }).status(200).json({
            message: "you are signed in"
        })
    }catch(e){
        res.status(500).json({
            message: "internal server error"
        })
    }
})
export default userRouter;