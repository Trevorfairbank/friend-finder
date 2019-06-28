const friendsData = require("../app/data/friends");


module.exports = (app) => {


    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });


    app.post("/api/friends", (req, res) => {
          friendsData.push(req.body);
          res.json(friendData);
      });

}