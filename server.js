const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//App
const app = express();

//Database
mongoose.connect('mongodb://localhost:27017/nodeapi' ,  
  {useNewUrlParser:true},
);
requireDir('./src/models');
const Product = mongoose.model('Product');


//First Route
app.get('/', (req,res)=>{
  Product.create({
    title:'Manga',
    description:'Fruta',
    url:'https://www.google.com'
  })
  return res.send('Hello world');
})

app.listen(3001);