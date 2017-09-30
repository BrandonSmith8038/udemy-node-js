const express = require("express");
const mongoose = require("mongoose");

const app = express();


app.get('/', (req, res) => {
  res.send('It Works!!!!');
});







const port = process.env.PORt || 5000

app.listen(process.env.PORT,process.env.IP, () => {
    console.log(`Server started at ${process.env.IP}:${process.env.PORT}`);
});
