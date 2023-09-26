import { FoodRepository } from "../repositories/food.repository";

export class FoodService {

  private readonly foodRepository: FoodRepository;

  constructor(foodRepository: FoodRepository) {
    this.foodRepository = foodRepository;
  }

  getAllFood() {
    return this.foodRepository.getAllFood();
  }

 filterFoodByCategory(category: string) {
    const allFood = this.foodRepository.getAllFood();   
    // Filter the menu items by category
    const filteredData = allFood.filter((item: any) => item.category.toLowerCase() === category.toLowerCase());
    return filteredData;
  }
}