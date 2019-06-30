const friendsData = require("../app/data/friends");


module.exports = (app) => {


    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });



    app.post("/api/friends", (req, res) => {
        console.log(req.body.scores);
        let newFriendScores = [];
        let matchName = "";
        let matchImage = "";
        let maxDiff= 40;
        //loops through req.body (bunch of strings) and makes them numbers
        for (var i = 0; i < req.body.scores.length; i++) {
            newFriendScores.push(+req.body.scores[i]);
        }

        console.log(newFriendScores);

        //loops through all different friends in friends.js
        for (var i = 0; i < friendsData.length; i++) {
            let difference = 0;
            //loops through and calculates the difference between all the friends.
            for (var x = 0; x < newFriendScores.length; x++) {
                difference += Math.abs(friendsData[i].scores[x] - newFriendScores[x]);
            }
            // console.log(difference);
            if(maxDiff < 40)
                maxDiff = difference;
                matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;
            
        }
        
        // Add user to friends.js
        friendsData.push(req.body);

        res.json(
            {
                name: matchName,
                photo: matchImage,
                friendsData

            }
        )

    });
};