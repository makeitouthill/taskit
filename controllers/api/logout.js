const router = require('express').Router();

router.get('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.redirect('/login');
        });
    } else {
      res.status.apply(404).end();
    }
  });

  module.exports = router;