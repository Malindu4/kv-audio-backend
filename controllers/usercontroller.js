
import user from "../models/user.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config()
export function registerUser(req, res) {
    const data = req.body
    data.password = bcrypt.hashSync(data.password, 10)   
      const newUser = new user(data)



 newUser.save ().then  (()=>{
    res.json({message:"User registerd successfully"})
 }).catch ((error)=>{
    res.status(500).json({error:"User registration failed"})
 })
} 

export function loginUser(req, res) {
const data=req.body
user.findOne({
   email:data.email
}).then ((user)=>{
    if(user==null){
        res.status(404).json({error:"User not found"})
    }
   else{
     
      const ispasswordCorrect=bcrypt.compareSync(data.password,user.password)
      
      
      if(ispasswordCorrect){

         const token=jwt.sign({
            firsName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            rale:user.rale,
         profilePicture:user.profilePicture
            
         },process.env.jwi_secret)
         res.json({message:"Login successfull",token:token})

      }
      else{
         res.status(401).json({error:"login failed"})

      }
   }
   
})
}

   