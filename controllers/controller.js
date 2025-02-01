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

export const createDrink = async (req, res) => {
    try {
        await Drink.create(req.body);
        res.redirect('/drinks');
    } catch (err) {
        res.status(500).send('Error adding drink');
    }
};

export default {
    getDrinks,
    createDrink
}