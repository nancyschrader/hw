const Product = require('../models/Product')
const productData = require('./seed.json')
const mongoose = require('./connection')

Product.deleteMany({}).then(() => {
    Product.collection.insertMany(productData).then(products => {
        // console.log(products)
    }).catch(err => {
        console.log(err)
    })
}).then(() => {
    mongoose.connection.close()
})
