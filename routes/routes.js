import express from 'express'

const router = express.Router()

// Get all drinks
router.get('/', (req, res) => {
    res.json({msg: 'GET all drinks'})
    console.log('hello from server')
})

// Get a single drink
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single drink'})
})

// Post a new drink
router.post('/', (req, res) => {
    res.json({msg: 'POST a drink'})
})

// Delete a drink 
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a drink'})
})

router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a drink'})
})

export default router