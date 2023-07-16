
const express = require('express');

const app = express();

const PORT = 8000;

require('dotenv').config();

const db = require('./config/mongoose');



app.use('/',require('./routes'));

app.listen(PORT, function(error){
    if(error){
        console.log('Error in Listening', error);
        return;
    }
    console.log('Server is Runnin on Port :',PORT);
})