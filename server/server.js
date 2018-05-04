const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(config.port, ()=>{
    console.log("Listening on port 3000...");
});

mongoose.connect(config.database, (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});
