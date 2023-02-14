const router = require('express').Router();
const { User, JobOffer } = require('../models');
const withAuth = require('../utils/auth');

// Home page
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    res.render('homepage', {
      users,
    //   loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
// Login page
router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
    res.render('login');
  });