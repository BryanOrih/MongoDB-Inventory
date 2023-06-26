const Inventory = require('../model/inventory.js')

const getInventory = async (req,res) =>{
    try{
        const info = await Inventory.find()
        res.json(info)
    }catch(err){
        res.send("Error, couldn't find the Inventory database")
    }
}
const postInventory = async (req,res) =>{
    try{
        let newItem = await Inventory.create(req.body)
        res.json(newItem)
    }catch(err){
        res.send("Error, couldn't post to the Inventory database")
    }
}

module.exports = {
    getInventory,
    postInventory
}