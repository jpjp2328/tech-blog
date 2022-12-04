const { Comment } = require('../models');

const commentData = [
    {
        text: "example comment 1",
        user_id: 1,
        post_id: 1,
    },
    {
        text: "example comment 2",
        user_id: 2,
        post_id: 2,
    },
    {
        text: "example comment 3",
        user_id: 3,
        post_id: 3,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;