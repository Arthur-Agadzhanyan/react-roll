const mongoose  = require("mongoose")
const FoodCard = require("../../models/FoodCard")

module.exports = async (req, res) => {
    if (req.method === "POST") {
        try {
            await mongoose.connect("mongodb+srv://artur:f1g2h11t90@cluster0.idgii.mongodb.net/store?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
            const allFood = await FoodCard.find()
            res.status(200).json(allFood)
        } catch (e) {
            console.log(`Server error:--- ${e}`)
            res.status(400)
            process.exit(1)
        }
    }
}
