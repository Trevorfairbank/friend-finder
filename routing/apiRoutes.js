const friendsData = require("../app/data/friends");


module.exports = (app) => {


    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });



    app.post("/api/friends", (req, res) => {
        // console.log(req.body.scores);
        let newFriendScores = [];
        let matchName = "";
        let matchImage = "";
        let diffArr = [];
        let bestMatch= 40;
        //loops through req.body (bunch of strings) and makes them numbers
        for (var i = 0; i < req.body.scores.length; i++) {
            newFriendScores.push(+req.body.scores[i]);
        }

        // console.log(newFriendScores);

        //loops through all different friends in friends.js
        for (var i = 0; i < friendsData.length; i++) {
            let totalDifference = 0;
            //loops through and calculates the difference between all the friends.
            for (var x = 0; x < newFriendScores.length; x++) {
                totalDifference += Math.abs(friendsData[i].scores[x] - newFriendScores[x]);
            }
            //pushes the differences to an empty array.
            diffArr.push(totalDifference);
            //sorts the array from small to high
            diffArr.sort(function (a, b) { return a - b });
            //variable for the first index of array
            const lowestDiff = diffArr[0];

    //Couldn't figure out how to target the Lowest Difference and link that back to the friend with that score...
            if(lowestDiff <= 19 && lowestDiff >= 0){
                matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;
            }
            else if (lowestDiff > 20){
                matchName = friendsData[0].name;
                matchImage = friendsData[0].photo;
            }
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