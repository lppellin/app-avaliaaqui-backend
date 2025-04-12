import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Review } from "../entities/Review";
import { Product } from "../entities/Product";

class ReviewController {
  private reviewRepository;
  private productRepository;

  constructor() {
    this.reviewRepository = AppDataSource.getRepository(Review);
    this.productRepository = AppDataSource.getRepository(Product);
  }

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { productId, name, email, feedback, experience, recommend } = req.body;

    try {
      const productExists = await this.productRepository.findOneBy({ id: productId });
      if (!productExists) {
        res.status(404).json({ error: "Produto não encontrado." });
      }
      const review = this.reviewRepository.create({
        productId,
        name,
        email,
        feedback,
        experience,
        recommend,
      });

      await this.reviewRepository.save(review);

      res.status(201).json(review);
    } catch (error) {
      next(error);
    }
  };

  listAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const reviews = await this.reviewRepository.find({ relations: ["product"] });
      res.status(200).json(reviews);
    } catch (error) {
      next(error);
    }
  };
}

export default new ReviewController();
