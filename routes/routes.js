import express from 'express'
import controller from '../controllers/controller.js'
const router = express.Router()

// Get all drinks
router.get('/', controller.getDrinks);

router.get('/new', controller.showAddForm)


// Post a new drink
router.post('/', controller.createDrink)

// Delete a drink 
router.delete('/:id', controller.deleteDrink)

router.put('/:id', controller.updateDrink)

export default router