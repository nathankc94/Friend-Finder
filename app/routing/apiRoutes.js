var friends = require('../data/friends.js');

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function (req, res) {
    var friendScore = req.body.scores;
    
    for (var i = 0; i < friendScore.length; i++) {
      friends.push(friendScore);
    }
  });
};

