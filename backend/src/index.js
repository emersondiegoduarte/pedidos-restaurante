const express = require('express');
const routes = require('./routes')
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const { request } = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

// mongoose.connect('mongodb+srv://diegodias:melinda2904@cluster0.jg2sm.mongodb.net/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// })

mongoose.connect('mongodb://mongo:27017/pedidos-restaurante', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const server = http.Server(app);
const io = socketIo(server);
app.use((request, response, next) =>{
    request.io = io;
    next();
})
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, () => {console.log("Server is Running")})