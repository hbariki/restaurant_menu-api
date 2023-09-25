import { Request, Response } from 'express';
import { FoodService } from '../services/food.service';

export class FoodApi {

  private readonly foodService: FoodService;

  constructor(foodService: FoodService) {
    this.foodService = foodService;
  }

  getFood = async (req: Request, res: Response) => {
    const { category } = req.query;
    if(!category) {
      // return the entire menu if no category is provided
      const foodData = this.foodService.getAllFood();
      return res.json(foodData);
    } 
    else {
      // Filter the menu items by category
      const filteredData = this.foodService.filterFoodByCategory(category as string); // Cast category to string
      return res.json(filteredData);
    }
  }
}