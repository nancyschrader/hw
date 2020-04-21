const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product