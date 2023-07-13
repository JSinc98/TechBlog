// const sequelize = require("../config/connection");
const { Comment, Post, User } = require('../models');
const router = require("express").Router();

// route for getting all posts (when user not logged in)
router.get('/', (req, res) =>{
  Post.findAll({})
  .then((PostData) => {
    const Posts = PostData.map((post) => post.get({ plain: true }));
    res.render("homepage", { Post });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});
// route for getting a single post by Id

// route for login page

// route for signup page

// export router
module.exports = router;
