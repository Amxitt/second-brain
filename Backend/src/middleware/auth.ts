import type { Request, Response, NextFunction } from "express";
import { JWT_PASSWORD } from "../config.js";
import  jwt  from "jsonwebtoken";
interface JwtUserPayload {
  id: string;
}



export const authentication = (req: Request, res: Response, next: ()=> any) =>{
   const token = req.cookies?.token;
   if(!token) {
      return res.status(401).json({
         message: "not authenticated"
      })
   }
   try{
   const decoded = jwt.verify(token, JWT_PASSWORD);
     // console.log(decoded)// something like ={ id: '697c6b644947bd7ae5e3936c', iat: 1769786146 }
         if (typeof decoded === "string") {
      return res.status(401).json({
        message: "invalid token payload",
      });
    }

     req.userId = decoded.id
      next();
   }catch(e){
      res.status(401).json({
         message: "invalid or expired token"
      })
   }
}