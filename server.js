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
});

var tryRouter = express.Router();
tryRouter.get('/lala', function(req, res) {
    res.send({ hi: 'hello' }); 
});

// router, like flask blueprint
// prefixes route with '/api'
app.use('/api', router);
app.use('/lala', tryRouter);

// start server
app.listen(port);
console.log('Magic happens on port ' + port);

