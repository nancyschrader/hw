const express = require('express');
const app = express();
const port = 3000;

const fruits = require("./models/fruits.js");

app.get('/fruits/', (req,res) =>{
    res.render("show.ejs", {fruit: fruits[req.params]});
});
// add show route
app.get('/fruits/:indexOfFruit', (req, res) => {
    // res.send(fruits[req.params.indexOfFruit]);
    res.render("show.ejs", { fruit: fruits[req.params.indexOfFruit] } );
});



 app.listen(port, () => {
     console.log("listening on port", port);
 });