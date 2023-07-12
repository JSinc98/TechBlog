const router = require('express').router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
