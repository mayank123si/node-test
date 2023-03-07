// const http = require('http');
const express = require('express');
const mongoose = require('mongoose')

mongoose.connect("mongodb://mongoadmin:iZNZFRlvGAjMtL7Rp7d98g7q7@3.108.137.37:22018/mayankDon-test?authSource=admin&retryWrites=true&w=majority");


mongoose.connection.on('connected', function () {
    console.log('Database connected');

});


const app = express();
app.listen(4000, () => {
    console.log("mayank");
});
app.get("/", (req, res) => {
    res.send("Home")
})
app.get("/about", (req, res) => {
    res.send("About")
})


app.get("/detail", (req, res) => {
    res.send({

        name: "mayank",
        lastName: "singh"

    })
})