const Product = require("../models/Product");

const getAll = (req, res) => {
  Product.find({}).then((products) => {
    res.json(products);
  });
};

const getById = (req, res) => {
  Product.find({ _id: req.params.id }, req.body).then((product) => {
    res.json(product);
  });
};

const create = (req, res) => {
  Product.create(req.body).then((product) => {
    Product.find({}).then((products) => {
      res.json(products);
    });
  });
};

const update = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body).then((product) => {
    Product.find({}).then((products) => {
      res.json(products);
    });
  });
};

const deleteOne = (req, res) => {
  Product.findOneAndDelete({ _id: req.params.id }).then((product) => {
    Product.find({}).then((products) => {
      res.json(products);
    });
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteOne,
};