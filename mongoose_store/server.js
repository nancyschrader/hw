const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Products = require('../models/products.js');
const methodOverRide = require('method-override');

app.use(express.urlencoded({extended:true}));
app.use(methodOverRide('_method'));

mongoose.connect('mongodb://localhost:27017/productsdb', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect.once('open', () => {
    console.log('connected to mongo');
});

const productController = require('.controllers/products.js');

app.use('/products', productsController)
