import product from "../models/product.js";

export function addProduct(req, res) {
    


  console.log(req.user)

if(res ,user==null){
      res.status(404).json(
       {message:"please login and try again"}
      )
       return
 }
   if(res.user.rale!="admin"){
       res.status(404).json(
         {message:"you are not admin"}
       )
        return
   }
    const data = req.body;
    
    
    const newProduct = new product(data);
    
    
    newProduct.save()
    .then(() => {
        res.json({ message: "Product added successfully" });
    }).catch((error) => {
       
       
        res.status(500).json({ error: "Product addition failed" });
    });
}