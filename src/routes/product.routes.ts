import { Router } from "express";
import ProductController from "../controllers/ProductController";

const productRouter = Router();

productRouter.post("/", ProductController.create);

export default productRouter;
