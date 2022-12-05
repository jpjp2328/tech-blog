const { Post } = require('../models');

const postData = [
    {
        heading: "Welcome to my Tech Blog",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Morbi tristique senectus et netus. Dui accumsan sit amet nulla. Viverra adipiscing at in tellus. Eget nunc scelerisque viverra mauris. Velit dignissim sodales ut eu. Nam libero justo laoreet sit. Id neque aliquam vestibulum morbi blandit cursus. Vel risus commodo viverra maecenas accumsan.",
        user_id: 1
    },
    {
        heading: "New Tech by SpeedWagon Foundation",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Sed risus ultricies tristique nulla aliquet enim tortor at. Non nisi est sit amet facilisis magna etiam tempor. Non consectetur a erat nam at lectus urna duis convallis. Rutrum quisque non tellus orci ac auctor augue mauris augue. Id aliquet lectus proin nibh. Aliquet risus feugiat in ante metus dictum at tempor commodo.",
        user_id: 2
    },
    {
        heading: "This is the work of an enemy stand.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est. Cursus euismod quis viverra nibh. Interdum varius sit amet mattis vulputate enim. Id volutpat lacus laoreet non. Magnis dis parturient montes nascetur ridiculus mus.",
        user_id: 3
    }
    
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;