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

    profilePicture:{
        type: String,
        required: true,
        default:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740.jpg"
    },
  
});

 const user = mongoose.model("user", userSchema);
 export default user
 
 
 
