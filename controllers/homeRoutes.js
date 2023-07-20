// const sequelize = require("../config/connection");
const { Comment, Post, User } = require('../models');
const router = require("express").Router();

// route for getting all posts (when user not logged in)
router.get('/homepage', (req, res) =>{
  Post.findAll({
    include: [User]
  })
  .then((PostData) => {
    const posts = PostData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("homepage", { posts });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});
// route for getting a single post by Id
router.get('/post/:id', (req, res) =>{
  Post.findByPk(req.params.id, {
    include: [
      {model: User, attributes:{
        exclude: 'password'
      }},
      {
        model: Comment, include:[
          {model: User, attributes:{
            exclude: 'password'
          }}
        ]
      }
    ]
  }).then((onePost) => { 
    if (onePost){
      const post = (onePost).get({plain: true})
      return res.render('singleblog', {post})
    }
  })
})
// route for login page
router.get('/login', (req, res) => {
  // if (req.session.userId){
  //   res.redirect('/dashboard')
  // }
  res.render('login')
})
// route for signup page
router.get('/signup', (req, res) => {
  // if (req.session.userId){
  //   res.redirect('/dashboard')
  // }
  res.render('signup')
})
// export router
module.exports = router;
