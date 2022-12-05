const { User } = require('../models');

const userData = [
    {
        username: 'Jeffreyp123',
        password: 'password123'
    },
    {
        username: 'SpeedWagon',
        password: 'password123'
    },
    {
        username: 'JoesphJoestar',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;