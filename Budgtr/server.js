const express = require("express");
const app = express();
const methodOverride = require("method-override");
const port = 3000;

app.use(express.urlencoded());
app.use(methodOverride("_method"));
app.use(express.static("public"));

const Budget = require("/models/budget.js");

//INDEX
app.get("/bugets", (req,res) => {
    res.render('index.ejs, {ledger: Budget}')
});
//SHOW
app.get("/bugets/:index", (req,res) => {
    res.render("show.ejs", {ledger: Budget[req.params.index]})
});





app.listen(port, () => {
    console.log("Listening on port", port);
});