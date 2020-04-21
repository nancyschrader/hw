const mongoose = require("mongoose");
mongoose.Promise = Promise
mongoose.connect("mongodb://localhost/products", { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;