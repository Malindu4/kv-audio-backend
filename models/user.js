import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
    rale:{
        type: String,
        required: true,
        default:"customer"
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
   
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
  
});

 const user = mongoose.model("user", userSchema);
 export default user
 
 
 
