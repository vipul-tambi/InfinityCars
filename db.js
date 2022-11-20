const mongoose = require("mongoose");


function connectDB() {
    mongoose.connect("mongodb+srv://codeshows:asdf1234@cluster0.yirbo2e.mongodb.net/sheycars-udemy");

    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log("Successfully connected");
    })

    connection.on('error', () => {
        console.log("Error!!!!!!!");
    })
}

connectDB();
module.exports = mongoose;