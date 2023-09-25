import { Request, Response } from 'express';
import FoodService from '../services/food.service';

class FoodAPI {
  getFood(req: Request, res: Response): any{
    const { category } = req.params;
    if(!category) {
      // return the entire menu if no category is provided
      const foodData = FoodService.getAllFood();
      return res.json(foodData);
    } 
    else {
      // Filter the menu items by category
      const filteredData = FoodService.filterFoodByCategory(category as string); // Cast category to string
       return res.json(filteredData);
    }
  }
}

export default new FoodAPI();