import express from 'express';
import foodController  from '../controllers/foodController.js';

const router = express.Router();

router.get('/', foodController.getFoods);

router.get('/new', foodController.showAddForm)

router.post('/', foodController.createFood);


export default router;