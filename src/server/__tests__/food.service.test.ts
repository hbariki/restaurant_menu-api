// __tests__/food.service.test.ts
import FoodService  from '../services/food.service';

describe('FoodService', () => {  
    const allFood = [
        {id:1, category:'Appetizers'},
        {id:2, category:'Entrees'},
        {id:3, category:'Sandwiches'},
        {id:4, category:'Soup & Salad Combos'},
        {id:5, category:'Fajitas'},
        {id:6, category:'Tacos'},
        {id:7, category:'Enchiladas'},
        {id:8, category:'Quinche'},
        {id:9, category:'Green Salads'},
    ]             
  it('should filter food items by category', () => {
    //filterFoodByCategory(
        const filteredItems = FoodService.filterFoodByCategory('Appetizers');
        const categoryValue = filteredItems.map((item) => item.category);    
    expect(categoryValue).toEqual(['Appetizers']);
  });

  it('should return an empty array when category is not found', () => {
    const filteredItems = FoodService.filterFoodByCategory('Desserts');
    const categoryValue = filteredItems.map((item) => item.category); 
    expect(categoryValue).toEqual([]);
  });

  it('should filter food items with special characters in category name', () => { 
    const filteredItems = FoodService.filterFoodByCategory('Soup & salad Combos');
    const categoryValue = filteredItems.map((item) => item.category);
    expect(categoryValue).toEqual(['Soup & salad Combos']);
  });

  it('should filter food items with spaces in category name', () => { 
    const filteredItems = FoodService.filterFoodByCategory('Green Salads');
    const categoryValue = filteredItems.map((item) => item.category);
    expect(categoryValue).toEqual(['Green Salads']);
  });
});
