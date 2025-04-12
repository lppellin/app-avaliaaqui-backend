import { Router } from "express";
import ReviewController from "../controllers/ReviewController";

const reviewRouter = Router();

reviewRouter.post("/", ReviewController.create);
reviewRouter.get("/", ReviewController.listAll);

export default reviewRouter;
