import { Router } from "express";
import { authentication } from "../middleware/auth.js";
import { ContentModel } from "../db.js";
const contentRouter = Router();

contentRouter.use(authentication);
contentRouter.post("/create-content", async (req, res) => {
    const {type, link , title, tag} = req.body;
   if(!req.userId){
    return res.status(401).json({
        message: "error"
    })
   }
    try{
        await ContentModel.create({
            type: type, link: link, title: title, tags: tag, userId: req.userId
        })

        res.status(200).json({
            message: "content created"
        })
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            message: "internal server error occured"
        })
    }
})

contentRouter.get("/all", async (req, res) =>{
    if(!req.userId){
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    try{
        const content = await ContentModel.find({
            userId: req.userId
        })
        res.status(200).json({
            content 
        })
    }catch(error){
        res.status(500).json({
            message: "internal server issue not able to fetch content"
        })
    }
})

contentRouter.delete("/delete-content", async (req, res)=>{
   if(!req.userId){
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    try{
        await ContentModel.deleteOne({
            userId: req.userId, _id: req.body.id //ensures the content can only be deleted by the owner preserving ownership
        })

        res.status(200).json({
            message: "delete succeeded"
        })
    }catch(error){
        res.status(500).json({
            message: "internal server error could not delete content"
        })
    }
})

export default contentRouter