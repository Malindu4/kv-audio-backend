import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true, 
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  Comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
   profilePicture:{
        type: String,
        required: true,
        default:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740.jpg"
    },
  isApproved: {
    type: Boolean,
    required: true,
    default: false,
  }
   
});

const Review = mongoose.model("Review", reviewSchema);
export default Review