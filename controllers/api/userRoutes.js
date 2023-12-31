const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = userData.username;
            req.session.user_id = userData.user_id;
            res.status(200).json({ user: userData, message: 'Login Success.' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
  

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (!userData) {
            res.status(400).json({ message: 'Username or password incorrect, please try again.' });
            return;
        }
        const validPassword = userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Username or password incorrect, please try again.' });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = userData.username;
            req.session.user_id = userData.user_id;
            res.status(200).json({ user: userData, message: 'Login Success.' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
  
// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;