import mongoose from 'mongoose';
import Foods from '../models/food.js'

// async function addFood() {
//     try {
//         const newFood = new Food({
//             name: "Spaghetti Bolognese",
//             ingredients: [
//                 { name: "Pasta", amount: "200", unit: "g" },
//                 { name: "Tomato Sauce", amount: "1", unit: "cup" },
//                 { name: "Ground Beef", amount: "150", unit: "g" }
//             ],
//             instructions: "Cook pasta, prepare sauce, mix and serve."
//         });

//         await newFood.save();
//         console.log("New food added, collection created!");
//         mongoose.connection.close();
//     } catch (error) {
//         console.error(" Error adding food:", error);
//     }
// }
export const getFoods = async (req, res) => {
    try {
        const foods = await drink.find();
        console.log('Food retreived', foods)
        res.render('Foods', { foods });
    } catch (err) {
        res.status(500).send('Error retrieving Foods');
    }
};

export const showAddForm = (req, res) => {
    res.render('add');
};

export const createFood = async (req, res) => {
    try {
        console.log('Incoming body:', req.body);

        const { 
            name, 
            ingredients, 
            instructions, 
        } = req.body;

        // Check if required fields are missing
        if (!name || !ingredients || !instructions) {
            return res.status(400).send('Missing required fields');
        }

        // Create the new drink 
        const newFood = new Foods({
            name,
            ingredients: ingredients.map((ingredient, index) => ({
                name: ingredient.name,
                amount: ingredient.amount,
                unit: ingredient.unit,
            })),
            instructions
        });

        // Save the new drink to the database
        await newFood.save();

        // Redirect to the drinks page
        res.redirect('/food');
    } catch (err) {
        console.error('Error adding Item:', err);
        res.status(500).send('Error adding Item');
    }
};
export default {
    createFood,
    showAddForm,
    getFoods
}