const exp = require("constants")
const express = require("express")
const path = require("path")
const port = 3001
require("dotenv").config()
require("./config/database.js")
const app = express()
const {
    getInventory,
    postInventory
} = require("./controllers/inventory.js")
app.use(express.json())

app.use(express.static(path.join(__dirname, '/build')))
// require("./config/database.js")
app.get("/inventory", getInventory)

app.post("/inventory/create", postInventory)

app.listen(port, ()=>{
    console.log("server work")
})