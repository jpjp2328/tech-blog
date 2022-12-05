const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all
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
router.get('/:id', (req, res) => {
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
        res.json(postData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST Creating new post
router.post('/', withAuth, (req, res) => {
    Post.create({
        heading: req.body.heading,
        content: req.body.content,
        user_id: req.session.user_id,
    })
    .then((postData) => res.json(postData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT Update post

// DELETE posts

module.exports = router;