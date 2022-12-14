// Model relationships
const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Comments belongs to user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Post belongs to User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Comments belongs to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Comment, Post };