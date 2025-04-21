import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

class ProductController {
  private productRepository;

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name, price, brand, description, image } = req.body;

      if (!name || !price || !brand) {
        res.status(400).json({ message: "Os campos 'nome', 'preço' e 'marca' são obrigatórios." });
      }

      const product = this.productRepository.create({
        name,
        price,
        brand,
        description,
        image,
      });

      await this.productRepository.save(product);

      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  };

  listAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const products = await this.productRepository.find();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const product = await this.productRepository.findOneBy({ id: Number(id) });

      if (!product) {
        res.status(404).json({ message: "Produto não encontrado." });
        return;
      }

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };
}

export default new ProductController();
