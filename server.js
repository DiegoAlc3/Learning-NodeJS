const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//App
const app = express();
//Permitindo dados JSON
app.use(express.json());
//Permitindo dominios
app.use(cors());
//Database
mongoose.connect('mongodb://localhost:27017/nodeapi' ,  
  {useNewUrlParser:true},
);
requireDir('./src/models');

//Routes
app.use('/api', require('./src/routes'));

app.listen(3001);