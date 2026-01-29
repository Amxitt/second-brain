import {z} from "zod"
import type { Request, Response, NextFunction } from "express";
const requiredBody = z.object({
    email: z.string().email().toLowerCase().trim(),
    password: z.string().min(8).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/)
})

export const validate =  (req: Request, res: Response, next: NextFunction) => {
    const requiredBodyWithSuccess = requiredBody.safeParse(req.body);
    console.log(requiredBodyWithSuccess)//to understand 
    if(!requiredBodyWithSuccess.success){
        return res.status(411).json({
            message: "Error in inputs",
            errors: requiredBodyWithSuccess.error.format(),
        })
    }
    next();

}