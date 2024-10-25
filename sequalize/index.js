// index.js
const express = require("express");
const app = express();
require("dotenv").config();

const dbConnect = require("./database/dbConnection");
const User = require("./models/user");
const userRoute = require("./routes/userRoute")

app.use(express.json());
// Database connection
dbConnect.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log("Error: " + err));

// Sync models
dbConnect.sync({ alter: true }) 
    .then(() => console.log("Database synced..."))
    .catch(err => console.log("Sync error: " + err));

const PORT = process.env.PORT || 8085;


app.get('/', function(req, res) {
    res.send("<p>Hello world</p>");
});

app.use('/user', userRoute);

app.listen(PORT, function() {
    console.log(`Server is listening at port ${PORT}`);
});
