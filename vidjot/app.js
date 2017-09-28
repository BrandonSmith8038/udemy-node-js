const express = require('express');
const exphbs = require("express-handlebars");

const app = express();

//Handle Bars Middle Ware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Index Route

app.get('/', (req, res) => {
    const title = "Welcome"
    res.render('index', {
        title: title
    })
});

//About Route
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(process.env.PORT,process.env.IP, () => {
    console.log(`Server started at ${process.env.IP}:${process.env.PORT}`);
});