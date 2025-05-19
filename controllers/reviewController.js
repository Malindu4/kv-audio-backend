import Review from "../models/review.js";
export function addRview(req,res){
    if (req.user==null){
        res.status(401).json({
            messge: "please login and try again"

        })
        return;
    }

    const data =req.body;
   data.name=req.user.firstName+" "+req.user.lastName


    data.profillepicture= req .user.profillepicture;
    data.emaill=req.user.email

    const newReview=new Review(data)
    newReview.save().then(()=>{
        res.json({message:"Review added successfully"})
    }).catch((error)=>{
        res.status(500).json({error:"Review addition failed"})
    })

}