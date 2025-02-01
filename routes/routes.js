import express from 'express'
import controller from '../controllers/controller.js'
const router = express.Router()

// Get all drinks
router.get('/', controller.getDrinks);

// Get a single drink
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single drink'})
})

// Post a new drink
router.post('/', controller.createDrink)

// Delete a drink 
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a drink'})
})

router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a drink'})
})

export default router