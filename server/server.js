//Server setup

const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const app = express();

const HTTP_PORT = process.env.PORT || 3000;
const SERVER = app.listen(HTTP_PORT, ()=>{
    console.log("Listening on port 3000...");
});

//Mongoose connection
const URL = "mongodb://root:root@ds263989.mlab.com:63989/cryptos"
mongoose.connect("mongodb://root:root@ds263989.mlab.com:63989/cryptos");
const CONN = mongoose.connection;
CONN.on('Connected', ()=>{
    console.log("Mongoose default connection to ", URL);
});
CONN.on('Error', ()=>{
    console.log("Error connecting to database ", err);
});


