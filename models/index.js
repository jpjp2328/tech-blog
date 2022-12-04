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
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Post belongs to User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Comments belongs to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Comment, Post };