var path = require('path');

module.exports = function(app){
    // send user to survey page
    app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
  
    app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
  };
  