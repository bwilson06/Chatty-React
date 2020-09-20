var express = require("express");
var mongoose = require("mongoose")

//port for environment
var PORT = process.env.PORT || 3001;

//initialize express server
var app = express();

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./routes/apiRoutes.js")(app);

//making public a static folder
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NewsChattyReact";

// Connect to our database
mongoose.connect(MONGODB_URI);


//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//starting server
app.listen(PORT, function() {
    console.log(`Express is running on port ${PORT}`);
});