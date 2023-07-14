const {User} = require('../models');

const userSeed = [
    {
        id:1,
        username: 'techy',
        password: '12345'
    },
    {
        id: 2,
        username: 'blogman',
        password: '67890'
    },
    {
        id: 3,
        username: 'datagirl',
        password: 'password'
    },
    {
        id: 4,
        username: 'jimbo',
        password: 'hellou'
    },
];

const seedingUsers = () => User.bulkCreate(userSeed, {
    individualHooks: true,
    returning: true,
}
);

module.exports = seedingUsers;