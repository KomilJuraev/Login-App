require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userInforRoute = require('./routes/userInfoRoute');
const cors = require('cors');

const app = express();

app.use(cors());

//Middleware for parsing request body
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "Welcome to the login app"});
})

app.use('/', userInforRoute)
mongoose.connect(process.env.DATABASE_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('App connect to the database and Server started on port ', process.env.PORT);
    });
})
.catch((error) => {
    console.log("Failed to connect");
});
