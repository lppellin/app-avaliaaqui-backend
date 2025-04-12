import { Router } from "express";
import ProductController from "../controllers/ProductController";

const productRouter = Router();

productRouter.post("/", ProductController.create);
productRouter.get("/", ProductController.listAll);

export default productRouter;
