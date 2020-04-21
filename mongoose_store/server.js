const express = require("express");
const parser = require("body-parser");
const app = express();


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const seedRoutes = require("./routes/seedRoutes");
app.use('/seed', seedRoutes)

const productRoutes = require("./routes/productRoutes");
app.use('/products', productRoutes)

app.listen(3000, () => console.log("Up and working."));