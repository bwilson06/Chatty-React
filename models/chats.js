var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var chats = new Schema ({
    roomCode : {
        type: String,
        required: true
    },
    adminName : {
        type: String,
        required: true
    },
    chats: {
        type: Array,
        required: false
    }
});

var Chats = mongoose.model("Chats", chats);

module.exports = Chats;