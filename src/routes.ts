// routes/FoodRoutes.ts
import { Router } from 'express';
import { FoodRepository } from './repositories/food.repository';
import { FoodService } from './services/food.service';
import { FoodApi } from './apis/food.api';

// initialize router
const router = Router();

// Setup dependency injection
const dataFilePath = './src/data/food.json';

// initialize food data repository
const foodRepository = new FoodRepository(dataFilePath);

// initialize foodService
const foodService = new FoodService(foodRepository);

// initialize foodApi
const foodApi = new FoodApi(foodService);

// Define routes and map to controller methods
router.get('/api/food', foodApi.getFood);

router.get('*', (req, res) => { res.json('hello')});

export default router;
