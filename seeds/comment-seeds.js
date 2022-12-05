const { Comment } = require('../models');

const commentData = [
    {
        text: "Nice start, congratulations",
        user_id: 2,
        post_id: 1,
    },
    {
        text: "Wow, i didn't know you could do that, love it",
        user_id: 3,
        post_id: 1,
    },
    {
        text: "Everyone is going to be using this now, Thanks!",
        user_id: 1,
        post_id: 2,
    },
    {
        text: "I always knew you had it in you! Well done!",
        user_id: 3,
        post_id: 2,
    },
    {
        text: "What?...",
        user_id: 1,
        post_id: 3,
    },
    {
        text: "I believe you!",
        user_id: 2,
        post_id: 3,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;