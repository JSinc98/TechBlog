const sequelize = require("../config/connection");
const { Jobs, User } = require("../models");
const router = require("express").Router();

//Display all posts on homepage
router.get("/", (req, res) => {
  post.findAll({})
    .then((postData) => {
      const post = postData.map((post) => post.get({ plain: true }));
      res.render("homepage", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//render create post handle bar
router.get("/newpost", (req, res) => {
  res.render("createpost");
});
//render home page
router.get("/homepage", (req, res) => {
  res.render("/homepage");
});

//render jobview handlebar
router.get("/singlepost", (req, res) => {
  res.render("/singleblog/:id");
});

//login redirect
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//sign up redirect
router.get("/signUp", (req, res) => {
  res.render("signUp");
});

//find a post by id
router.get("/post/:id", (req, res) => {
  post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "content", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    //render jobview handlebars once job has been selected
    .then((PostData) => {
      if (!PostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      const post = PostData.get({ plain: true });
      console.log(post);
      res.render("/jobview", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;