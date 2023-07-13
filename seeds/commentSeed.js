const comment = require('../models');

const commentSeed = [
    {
        comment: 'This is Awesome!'
        user_id: 2,
        post_id: 1,
        timestamp: 'January 3, 2001',
    },
    {
        comment: 'Good Job!'
        user_id: 1,
        post_id: 2,
        timestamp: 'April 20, 2011',
    },
    {
        comment: 'Interesting!'
        user_id: 2,
        post_id: 1,
        timestamp: 'October 31, 2022',
    },
    {
        comment: 'Wild!'
        user_id: 1,
        post_id: 2,
        timestamp: 'May 17, 2020',
    },
];

const seedingcomments = () => Comment.bulkCreate(commentSeed);

module.exports = seedingcomments;