import drink from '../models/drink.js'

export const getDrinks = async (req, res) => {
    try {
        const drinks2 = await drink.find();
        console.log('Drink retreived', drinks2)
        res.render('drinks', { drinks2 });
    } catch (err) {
        res.status(500).send('Error retrieving drinks');
    }
};

export const showAddForm = (req, res) => {
    res.render('add');
};

export const createDrink = async (req, res) => {
    try {
        console.log('Incoming body:', req.body);

        // Destructure necessary fields from req.body
        const { 
            name, 
            ingredients, 
            instructions, 
            category, 
            alcoholContent, 
            glassType, 
            garnishes 
        } = req.body;

        // Check if required fields are missing
        if (!name || !ingredients || !instructions || !category) {
            return res.status(400).send('Missing required fields');
        }

        // Create the new drink 
        const newDrink = new drink({
            name,
            ingredients: ingredients.map((ingredient, index) => ({
                name: ingredient.name,
                amount: ingredient.amount,
                unit: ingredient.unit,
            })),
            instructions,
            category,
            alcoholContent: alcoholContent === 'on', // If checkbox is checked
            glassType
        });

        // Save the new drink to the database
        await newDrink.save();

        // Redirect to the drinks page
        res.redirect('/drinks');
    } catch (err) {
        console.error('Error adding drink:', err);
        res.status(500).send('Error adding drink');
    }
};



export const updateDrink = async (req, res) => {
    try{
        await drink.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/drinks')
    }catch{
        res.status(500).send('Error updating drink');
    }
}

export const deleteDrink = async (req, res) => {
    try {
        await drink.findByIdAndDelete(req.params.id);
        res.redirect('/drinks');
    } catch (err) {
        res.status(500).send('Error deleting drink');
    }
};

export default {
    getDrinks,
    createDrink,
    showAddForm,
    updateDrink,
    deleteDrink
}