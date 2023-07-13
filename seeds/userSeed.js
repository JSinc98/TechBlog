const User = require('../models');

const userSeed = [
    {
        username: 'techy'
        password: '12345'
    },
    {
        username: 'blogman'
        password: '67890'
    },
    {
        username: 'datagirl'
        password: 'password'
    },
    {
        username: 'jimbo'
        password: 'hellou'
    },
];

const seedingUsers = () => User.bulkcreate(userSeed);

module.exports = seedingUsers;