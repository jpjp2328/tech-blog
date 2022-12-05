const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/Auth');

// Get all post for homepage
router.get('/', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
        attributes: ['id','heading','content','created_at'],
        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'post_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
    ]
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

// Login route

// Signup route

// Dashboard route 

module.exports = router;
