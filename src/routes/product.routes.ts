import { Router } from "express";
import ProductController from "../controllers/ProductController";

const productRouter = Router();

productRouter.post("/", ProductController.create);
productRouter.get("/", ProductController.listAll);
productRouter.get("/:id", ProductController.getById);

export default productRouter;
