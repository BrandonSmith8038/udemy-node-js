const express = require('express');

const app= express();

// Index Route

app.get('/', (req, res) => {
    res.send('INDEX')
});

//About Route
app.get('/about', (req, res) => {
    res.send('ABOUT');
})

const port = 5000;

app.listen(process.env.PORT,process.env.IP, () => {
    console.log(`Server started at ${process.env.IP}:${process.env.PORT}`);
});