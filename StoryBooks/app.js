const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

// Load User Model

require('./models/Users');

// Passport Config
require("./config/passport")(passport);

// Load Routes
const auth = require("./routes/auth");

// Load Keys
const keys = require("./config/keys");

// Map global promises
mongoose.Promise = global.Promise;

//Mongoose Connect
mongoose.connect(keys.mongoURI, {
  useMongoClient:true
})
  .then(() => console.log('MongoDB Connected') ) 
  .catch(err => console.log(err));

const app = express();


app.get('/', (req, res) => {
  res.send('It Works!!!!');
});





// Use Routes
app.use('/auth', auth);

const port = process.env.PORt || 5000;

app.listen(process.env.PORT,process.env.IP, () => {
    console.log(`Server started at ${process.env.IP}:${process.env.PORT}`);
});
