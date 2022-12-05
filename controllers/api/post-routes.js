const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all
router.get('/', (req, res) => {
    Post.findAll({ 
        attributes: ['id','heading','content'],
        include: [{
            model: Comment,
            attributes: ['id', 'text', 'user_id', 'post_id'],
            include: {
                model: User,
                attributes: ['username']
            },
        },
    ]
    })
    .then((postData) => res.json(postData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET by ID

// POST Creating new post

// PUT Update post

// DELETE posts