const express = require('express');
const router = express.Router();
const Products = require("../models/products.js");

//Routes


//NEW
router.get('/new', (req,res) => {
    res.render('new.ejs');
});

//SHOW
router.get('/:id', (req,res) => {
    Products.findById(req.params.id, (err, foundProduct) =>{
        res.render("show.ejs", {
            products: foundProducts
        });
    });
});
//Create
router.post('/', (req,res)=> {

    Products.create(req.body, (err, result) => {
        res.redirect('/product');
    });
});
// INDEX
router.get('/', (req,res)=>{
    Products.find({}, (err, all)
})