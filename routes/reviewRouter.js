import express from "express";
import { addRview } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post("/", addRview);

export default reviewRouter;