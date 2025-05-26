import Review from "../models/review.js";
export function addRview(req,res){
    if (req.user==null){
        res.status(401).json({
            messge: "please login and try again"

        })
        return;
    }

    const data =req.body;
    data.name = req.user.firstName + " " + req.user.lastName;
    data.profilePic = req.user.profilePic;
    data.email = req.user.email;

    const newReview=new Review(data)
    
    newReview.save().then(()=>{
        res.json({message:"Review added successfully"})
    }).catch(()=>{
        res.status(500).json({error:"Review addition failed"})
    })

}

export function getReviews(req,res){
    const user =req.user;
   
    if (user == null || user.role != "admin"){
      Review.find({isApproved:true}).then((reviews)=>{
           res.json(reviews)
       })
    return
    }

   if(user.rale=="admin"){
  Review.find().then((reviews)=>{
        res.json(reviews)
    })
   }
}

