import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FoodSchema = new Schema({
    name: { type: String, required: true, unique: true },
    ingredients: [
        {
            name: { type: String, required: true },
            amount: { type: String, required: true },
            unit: { type: String }
        }
    ],
    instructions: { type: String, required: true }
});

// FoodSchema.index({ createdAt: -1 }); //sorting by newest drinks
// FoodSchema.index({ category: 1 }); //filtering by category

export default mongoose.model('Food', FoodSchema);