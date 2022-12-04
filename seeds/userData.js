const { User } = require('../models');

const userData = [
    {
        username: 'jeffreyp123',
        password: 'password123'
    },
    {
        username: 'jeffreyp456',
        password: 'password123'
    },
    {
        username: 'jeffreyp789',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;