import express from 'express';
import Food from "../models/food.js"

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        console.log(foods)
        res.render('foods/index', { foods }); // Pass food data to the view
    } catch (error) {
        res.status(500).send("Error fetching food data");
    }
});


router.get('/new', (req, res) => {
    res.render('foods/add');
});

router.post('/', async (req, res) => {
    try {
        await Food.create(req.body);
        res.redirect('/foods'); 
    } catch (error) {
        res.status(500).send("Error adding food");
    }
});


export default router;