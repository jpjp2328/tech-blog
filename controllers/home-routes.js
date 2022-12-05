const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/Auth');

// Get all post for homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id','heading','content'],
        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'post_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })
    .then((postData) => {
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get post by ID
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ['id','heading','content'],
        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'post_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })
    .then((postData) => {
        if (!postData) {
            res.status(404).json({ message: "No post found with this id"});
            return;
        }
        const post = postData.get({ plain: true });
        res.render('post', { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
});

// Dashboard route 
router.get('/dashboard', withAuth, (req, res) => {
    if (!(req.session.loggedIn)) {
        res.redirect('/');
        return;
    }
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id','heading','content'],
        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'post_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })
    .then((postData) => {
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;
