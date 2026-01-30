import { Router } from "express";
import { authentication } from "../middleware/auth.js";
import { ContentModel, LinkModel } from "../db.js";

const brainRouter = Router();


brainRouter.post("/share",authentication, async (req, res)=>{
    if(!req.userId){ //so typescript don't complain about it being undefined
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    try{
        const findIfAlreadyExists = await LinkModel.findOne({ //checking if user already have a hash then returning it instead of duplicating.
            userid: req.userId
        })
        if(findIfAlreadyExists){
            const hash = findIfAlreadyExists.hash
            return res.status(200).json({
                hash: hash //setting the already set hash
            })
        }
        const hash = crypto.randomUUID(); //create a random hash
        await LinkModel.create({
            hash: hash, userid: req.userId
        })
        res.status(201).json({
            hash,
            message: "hash created"
        })
    }catch(e){
        res.status(500).json({
            message: "internal server error request not fulfilled"
        })
    }
})

brainRouter.delete("/share", authentication, async (req, res)=>{
    if(!req.userId){
        return res.status(401).json({
            message: "unauthorized"
        })
    }
    await LinkModel.deleteOne({userid: req.userId})
    res.status(200).json({
        message: "brain sharing is disabled"
    })

})

brainRouter.get("/:hash", async (req, res)=>{
    const hash = req.params.hash;
    try{
        const user = await LinkModel.findOne({ //check if user exists with hash cuz this points needs not to be authenticated.
            hash: hash 
        })

        if(!user){
            return res.status(404).json({
                message: "no links exists"
            })
        }

        const content = await ContentModel.find({ // fetching all the content of the user form db
            userId: user.userid
        })

        res.status(200).json({
            content ,
            message: "content fetched successfully"
        })
    }catch(e){
        res.status(500).json({
            message: "some error occured while processing the request"
        })
    }

})

export default brainRouter;