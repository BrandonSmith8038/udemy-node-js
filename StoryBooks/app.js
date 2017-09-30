const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

// Passport Config
require("./config/passport")(passport);

// Load Routes
const auth = require("./routes/auth")

const app = express();


app.get('/', (req, res) => {
  res.send('It Works!!!!');
});





// Use Routes
app.use('/auth', auth);

const port = process.env.PORt || 5000

app.listen(process.env.PORT,process.env.IP, () => {
    console.log(`Server started at ${process.env.IP}:${process.env.PORT}`);
});
