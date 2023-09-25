import FoodRepository from "../repositories/food.repository";


class FoodService {
  getAllFood() {
    console.log(2);
    return FoodRepository.getAllFood();
  }

  // Add more service methods as needed
}

export default new FoodService();