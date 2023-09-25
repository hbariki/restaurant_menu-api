// routes/FoodRoutes.ts
import { Router } from 'express';
import FoodAPI from '../apis/food.api';

const router = Router();

// Define routes and map to controller methods
router.get('/food/:category', FoodAPI.getFood);

export default router;
