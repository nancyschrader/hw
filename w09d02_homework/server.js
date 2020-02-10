const express = require('express');

const app = express();

 app.get("/greeting/:name", (req, res)=>{
    res.send(`Hello, ${req.params.name}`)
 });

app.get("/tip/:total/:tip", (req, res)=> {
    res.send(`Your tip is: $${req.params.total*req.params.tip/100}`)
});

var answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
app.get("/magic/Will%20I%20Be%20A%20Millionaire", (req, res)=>{
    res.send('<h1>'+'Will you be a Millionaire?' + "</br>"  + answers[Math.floor(Math.random()*answers.length)] + '</h1>')
 });
 app.get('/', (req, res) => {  res.send('<h1>Hello Express!</h1>');})
app.listen(3000), () => {
    console.log("Hello, Welcome.")
};
