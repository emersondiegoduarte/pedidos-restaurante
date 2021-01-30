const express = require('express');
const routes = require('./routes')
const mongoose = require("mongoose");
const app = express();


mongoose.connect('mongodb://localhost:27017/pedidos-restaurante', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(express.json());
app.use(routes);

app.listen(3001, () => {console.log("Server is Running")})