const express = require('express');

const app = express();

 app.get("/greeting/:name", (req, res)=>{
    res.send(`Hello, ${req.params.name}`)
 });

app.get("/tip/:total/:tip", (req, res)=> {
    res.send(`Your tip is: $${req.params.total*req.params.tip/100}`)
});

app.listen(3000), () => {
    console.log("Hello, Welcome.")
};
