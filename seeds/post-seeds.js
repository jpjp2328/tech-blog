const { Post } = require('../models');

const postData = [
    {
        heading: "example post 1",
        content: "example content 1, will fill this in later",
        user_id: 1
    },
    {
        heading: "example post 2",
        content: "example content 2, will fill this in later",
        user_id: 2
    },
    {
        heading: "example post 3",
        content: "example content 3, will fill this in later",
        user_id: 3
    }
    
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;