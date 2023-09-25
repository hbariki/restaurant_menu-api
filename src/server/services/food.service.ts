import FoodRepository from "../repositories/food.repository";


class FoodService {
  getAllFood() {
    return FoodRepository.getAllFood();
  }

 filterFoodByCategory(category: string) {
    const allFood = FoodRepository.getAllFood();
    //Filter the menu items by category
    const filteredData = allFood.filter((item: any) => item.category === category);
    return filteredData;

 }
}

export default new FoodService();