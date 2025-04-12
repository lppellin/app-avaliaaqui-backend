import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

class ProductController {
  private productRepository;

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, price, brand, description, image } = req.body;

      if (!name || !price || !brand) {
        return res.status(400).json({ message: "Os campos 'nome', 'preço' e 'marca' são obrigatórios." });
      }

      const product = this.productRepository.create({
        name,
        price,
        brand,
        description,
        image,
      });

      await this.productRepository.save(product);

      return res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  };
}

export default new ProductController();
