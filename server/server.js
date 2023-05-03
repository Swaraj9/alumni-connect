//Imports
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const nodemailer = require("nodemailer");

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

mongoose.connection.on('connected', () => console.log("Database successfully connected"));

const userRouter = require('./routes/User');
const eventRouter = require('./routes/Event');
const responseRouter = require('./routes/Response');
const pasteventRouter = require('./routes/PastEvent');
const suggesteventRouter = require('./routes/SuggestEvents');

app.use('/user', userRouter);
app.use('/event', eventRouter);
app.use('/suggestevent', suggesteventRouter);
app.use('/pastevent', pasteventRouter);
app.use('/responseevent', responseRouter);

//Auto Email
app.post("/api/sendLetterOfAppreciation", async (req, res) => {
    try {
        const { email, message, subject } = req.body;

        const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "swaraj.dusane@somaiya.edu", // replace with your email
            pass: "Swaraj 90", // replace with your password
        },
        });

        const mailOptions = {
            from: "swaraj.dusane@somaiya.edu", // replace with your email
            to: email,
            subject: subject,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        res.send("Letter of Appreciation sent!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error sending Letter of Appreciation.");
    }
    });

//Start Server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})