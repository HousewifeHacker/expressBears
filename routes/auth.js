const express = require('express');
const passport = require('passport');

router = new express.Router();

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['email']
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.json({ message: 'Authenticated' });
    }
);

router.get(
    '/user',
    (req, res) => {
        res.send(req.user);
    }
);

module.exports = router;
