var path = require("path");
var friends = require("../app/friends.js");

function apiRoutes(app) {

    app.get("/api/friends", function(req, res) {

        res.json(friends);
    });


    app.post("/api/friends", function(req, res) {

        var newFriend = req.body;
        console.log(newFriend);
        var responses = newFriend.scores;



        var nameMatch = "";
        var photo = "";
        var difference = 50;

        for (var i = 0; i < friends.length; i++) {

            var diff = 0;
            for (var j = 0; j < responses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - responses[j]);
                console.log("diff = " + diff);
            }

            if (diff < difference) {

                difference = diff;
                nameMatch = friends[i].name;
                photo = friends[i].photo;
                console.log("the best " + nameMatch + photo);
            }
        }

        friends.push(newFriend);

        res.json({ nameMatch: nameMatch, photo: photo });
        console.log(nameMatch);



    });
}

module.exports = apiRoutes;
