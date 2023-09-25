import { Request, Response } from 'express';
import FoodService from '../services/food.service';

class FoodAPI {
  getFood(req: Request, res: Response): void {
    console.log(1);
    const foodData = FoodService.getAllFood();
    console.log(foodData);
    res.json(foodData);
  }

}

export default new FoodAPI();