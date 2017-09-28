const express = require('express');
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");


const app = express();

//Map global promis - get rid of warning

mongoose.Promise = global.Promise;

//Connect to mongoose

mongoose.connect('mongodb://localhost/vidjot-dev', {
    useMongoClient: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

//Load Idea Model

require("./models/Idea");
const Idea = mongoose.model('ideas');

//Handle Bars Middle Ware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Index Route

app.get('/', (req, res) => {
    const title = "Welcome";
    res.render('index', {
        title: title
    });
});

//About Route
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(process.env.PORT,process.env.IP, () => {
    console.log(`Server started at ${process.env.IP}:${process.env.PORT}`);
});