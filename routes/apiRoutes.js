var db = require("../models");

module.exports = function (app) {
  app.post("/create", (req, res) => {
    db.Chats.findOne({ roomCode: req.body.result }).then(function (result) {
      if (!result) {
        db.Chats.create({ roomCode: req.body.result, adminName: req.body.admin })
          .then(function (result) {
            console.log(result);
            res.send(result)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  });

};
