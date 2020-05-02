// Load express:
const express = require("express");
const app = express();
const port = 3333;
const mongoose = require('mongoose');
const Animal = require('./models/animals.js');
// const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));

mongoose.connect('mongodb://localhost:27017/logsdb', 
{ useNewUrlParser: true,
useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


// NEW
app.get("/animals/new", (req, res) => {
    res.render("new.ejs");

  });

//SHOW
app.get('/animals/:id', (req, res)=>{
  Animal.findById(req.params.id, (err, foundAnimal)=>{
      res.render("show.ejs", {
          animal: foundanimal
      }); 
  });
}); 
//CREATE
app.post('/animals/', (req, res)=>{
    if(req.body.upForAdoption === 'on'){ 
      
        req.body.upForAdoption = true;
    } else { //if not checked, req.body.shipIsBroken is undefined
        req.body.upForAdoption = false;
    }
    Animal.create(req.body, (error, result) => {
        // res.send(result);
        res.redirect("/animals");
    });
});
//INDEX
app.get('/animals', (req, res)=>{
  Animal.find({}, (err, allanimal)=> {
      res.render('index.ejs', {
          Animal: allanimal
      });
  });
});

// EDIT
app.get('/animals/:id/edit', (req, res)=>{
  Animal.findById(req.params.id, (err, foundanimal)=>{ 
      res.render(
      'edit.ejs',
      {
              animal: foundanimal 
              
      }
    );
  });
});
// PUT/UPDATE
app.put('/animals/:id', (req, res) => {
  if(req.body.upForAdoption === 'on' ) {
    req.body.upForAdoption = true 
  } else {
    req.body.upForAdoption = false
  }
  Animal.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel)=>{
      res.redirect('/animals');
  });
});
//DELETE 
app.delete('/animals/:id', (req, res)=>{
  Animal.findByIdAndDelete(req.params.id, (err, data)=>{
      res.redirect('/animals');//redirect back to animals index
  });
});





// WEB SERVER //
// Load up the express web server. IMPORTANT: Always do this at the end of your server.js:
app.listen(port, () => {
    console.log("listening on port", port);
  });