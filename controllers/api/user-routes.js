const router = require('express').Router();
const { User } = require('../../models');

// Create a new User
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
    .then((userData) => {
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = userData.id;
            req.session.username = userData.username;

            res.json(userData);
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

// Login

// Logout

