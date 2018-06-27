// 3rd party
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

// internal
const keys = require('./config/keys');
require('./models/User'); // done before passport service that uses User model
require('./services/passport'); //oauth service

mongoose.connect(keys.mongoURI);

const app = express();
// allow cookie for 30 days
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

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
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('Magic happens on port ' + PORT);
