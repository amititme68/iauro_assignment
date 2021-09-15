const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/iaurodb')
    .then(()=>console.log('connected to Mongodb'))
    .catch(err => console.error('couldnot connect to mongodb'));

// Routes import
const products = require('./routes/products');

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send("Welcome Users!!!");
});

app.use('/products',products);

// Routes to display 404 page
app.use((req,res)=>{
    res.status(404).send('<h1>404, Page not found <h1>')
}) 
  

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});



