const {Post} = require('../models');

const postSeed = [
    {
        id: 1,
        title: 'Microchips',
        content: 'Microchips are very useful.',
        timestamp: 'January 6, 2021',
        user_id: '1',
    },
    {
        id: 2,
        title: 'React',
        content: 'React is super easy to use!',
        timestamp: 'May 20, 2020',
        user_id: '2',
    },
    {
        id: 3,
        title: 'NoSQL',
        content: 'Very versastile backend data storage.',
        timestamp: 'April 18, 2022',
        user_id: '3',
    },
    {
        id: 4,
        title: 'Heroku',
        content: 'Really sucks.',
        timestamp: 'July 13, 2023',
        user_id: '1',
    },
];

const seedingPosts = () => Post.bulkCreate(postSeed);

module.exports = seedingPosts;