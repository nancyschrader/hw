const Product = require("../models/Product");
const productData = require('../db/seed.json')    
const mongoose = require('../db/connection')

const seed = (req, res) => {
    console.log('yes')
   Product.deleteMany({}).then(() => {
        Product.collection.insertMany(productData)
        .then(products => {
            res.json(products)
        }).catch(err => {
            console.log(err)
        })
    }).then(() => {
        mongoose.connection.close()
    })
};


module.exports = {
    seed
}