import express from "express";
import { addRview, getReviews } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", addRview);
reviewRouter.get("/", getReviews)

export default reviewRouter;