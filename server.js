const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// tester route, GET only
app.get('/', function(req, res) {
    res.json({ message: 'hooray!' });
});


var apiRouter = express.Router();
// use next to use additional routes on apiRouter
apiRouter.use( (req, res, next) => {
    next();
});
apiRouter.get('/', (req, res) => {
    res.json({ message: 'Our API' })
})

// router, like flask blueprint
// prefixes route with '/api'
// 'app.use' is Middlewear so app can be used by get method
app.use('/api', apiRouter);

// start server
app.listen(PORT);
console.log('Magic happens on port ' + PORT);

