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

            res.json(userData);
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

// Login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        },
    })
    .then((userData) => {
        if(!userData) {
            res.status(400).json({ message: 'Incorrect username or password, please try again.'});
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password, please try again.'});
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = userData.id;

            res.json({ user: userData, message: 'Logged in successfully!'});
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
