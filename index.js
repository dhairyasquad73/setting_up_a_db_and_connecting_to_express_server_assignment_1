const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose')
require('dotenv').config();


const app = express();
const PORT =  3010;

const URL = process.env.MONGO_URI || "mongodb+srv://dhairyajangirs73:barbieNaman@cluster0.vs62c.mongodb.net/";


app.use(express.static(resolve(__dirname, 'static')));
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log(`Database connected`)).catch((err)=>console.log(`Error connecting DB:${err}`))

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages', 'index.html')); 
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
