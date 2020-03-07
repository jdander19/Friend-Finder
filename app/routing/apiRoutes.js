var friends = require('../data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userScores = userData.scores;
        var b = userScores.map(function(item) {
            return parseInt(item, 10);
        });


        console.log("User Score " + userScores);
        var sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.fDifference);


    
        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;
            console.log(friends[i].name);
            console.log("Best match friend diff " + bestMatch.fDifference);

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log(" -------------------> " + totalDifference);            
            console.log(totalDifference + " Total Difference");

        }
        if (totalDifference <= bestMatch.fDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.Difference = totalDifference;
        }
        console.log(bestMatch);

        res.json(bestMatch);

    });

};