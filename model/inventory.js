const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
        price: {type: Number, required: true},
        inventory: {type: Number, required: true},
        nextDelivery: Date,
        deliveryAmt: {type: Number, required: true},
        name: {type: String, required: true}
    },
    {timestamps:true}
)

const Inventory = mongoose.model("Item", inventorySchema)

module.exports = Inventory