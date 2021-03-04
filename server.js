var express = require("express");
var mongoose = require("mongoose")
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const path = require('path');
require('dotenv').config()

//port for environment
var PORT = process.env.PORT || 3001;

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./routes/apiRoutes.js")(app);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static("client/build"));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
    
}

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ChattyReact";

// Connect to our database
mongoose.connect(MONGODB_URI);


//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (message) => {
        console.log(message)
        io.emit('message', message)
    })
});

//starting server
http.listen(PORT, function() {
    console.log(`Express is running on port ${PORT}`);
});