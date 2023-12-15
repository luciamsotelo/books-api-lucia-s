// APP.JS File
// // DEPENDENCIES
// const express = require("express");
// const cors = require('cors')
// const app = express();
// const mongoose = require("mongoose");

// require("dotenv").config();
// // const PORT = process.env.PORT || 3000;

// // Configure body-parser for JSON
// app.use(express.json());
// app.use(cors())

// // MONGOOSE
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('connected to mongo on: ', process.env.MONGO_URI)
// // })
// const PORT = process.env.PORT || 3000;
// // mongoose.connect('mongodb://localhost:27017/bookAPI', { useNewUrlParser: true, useUnifiedTopology: true }, () => {

// // });


// // Root index route
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// // books index route
// const bookController = require('./controllers/books_controller')

// // Use the routes from the bookController
// app.use("/books", bookController);


// // Listen on the specified port
// app.listen(3000, () => {
//     console.log(`Example app listening on port ${PORT}`);
// });

// module.exports = bookController

// DEPENDENCIES
const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

// Configure body-parser for JSON
app.use(express.json());
app.use(cors());

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected to mongo on: ', process.env.MONGO_URI);

const PORT = process.env.PORT || 3000;

// Root index route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// books index route
const bookController = require('./controllers/books_controller');

// Use the routes from the bookController
app.use("/books", bookController);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
