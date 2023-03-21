//Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')

const User = require('./models/User');

//Create Server
const port = 5000;
const app = express();

//Middleware
app.use(cookieParser());
app.use(express.json());


//MongoDB connection
try{
    mongoose.connect("mongodb+srv://swaraj:Swaraj 90@cluster0.lliqhu4.mongodb.net/?retryWrites=true&w=majority");
}catch(err){
    console.error("Database error occured" + err);
}

mongoose.connection.on('connected', () => console.log("Database successfully connected"))

const userInput = {
    username : "Swaraj",
    password : "1234567",
    role : "admin"
}

const user = new User(userInput);
user.save().then(doc => console.log(doc))

//Start Server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})