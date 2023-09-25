import { FoodService } from '../services/food.service';
import { FoodRepository } from '../repositories/food.repository';

// Define a type for the mock FoodRepository
const mockFoodRepository: Partial<FoodRepository> = {
  getAllFood: jest.fn(),
};

describe('FoodService', () => {
  let foodService: FoodService;

  beforeEach(() => {
    // Create a new FoodService instance for each test
    foodService = new FoodService(mockFoodRepository as FoodRepository);
  });

  it('should retrieve all food items from the repository', () => {
    // Mock the behavior of getAllFood
    (mockFoodRepository.getAllFood as jest.Mock).mockReturnValueOnce([
      { category: 'Burger', name: 'Cheeseburger' },
      { category: 'Pizza', name: 'Margherita' },
    ]);

    const result = foodService.getAllFood();

    expect(result).toEqual([
      { category: 'Burger', name: 'Cheeseburger' },
      { category: 'Pizza', name: 'Margherita' },
    ]);
  });

  it('should filter food items by category', () => {
    // Mock the behavior of getAllFood
    (mockFoodRepository.getAllFood as jest.Mock).mockReturnValueOnce([
      { category: 'Burger', name: 'Cheeseburger' },
      { category: 'Pizza', name: 'Margherita' },
      { category: 'Pizza', name: 'Pepperoni' },
    ]);

    const result = foodService.filterFoodByCategory('Pizza');

    expect(result).toEqual([
      { category: 'Pizza', name: 'Margherita' },
      { category: 'Pizza', name: 'Pepperoni' },
    ]);
  });
});
