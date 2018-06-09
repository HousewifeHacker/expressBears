var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var router = express.Router();

// register routes
app.get('/', function(req, res) {
    res.send({ message: 'hooray! welcome to our api!' });   
});
router.get('/', function(req, res) {
    res.send({ message: 'Welcome to router!'});
})

// router, like flask blueprint
// prefixes route with '/api'
app.use('/api', router);

// start server
app.listen(port);
console.log('Magic happens on port ' + port);

