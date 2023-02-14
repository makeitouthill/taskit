router.get('/api/profiles/:id', (req, res) => {
    Profile.findByPk(req.params.id).then(profile => {
        res.json(profile);
    });
});
  
router.post('/api/profiles', (req, res) => {
    Profile.create({
        user_id: req.body.user_id, 
        location_id: req.body.location_id,
        view_type: req.body.view_type,
        bio: req.body.bio
    }).then(profile => {
        res.json(profile);
    });
});

router.put('/api/profiles/:id', (req, res) => {
    Profile.update({
        user_id: req.body.user_id,
        location_id: req.body.location_id,
        view_type: req.body.view_type,
        bio: req.body.bio
    }, {
        where: { id: req.params.id }
    }).then(() => {
      Profile.findByPk(req.params.id).then(profile => {
        res.json(profile);
      });
    });
});
  
router.delete('/api/profiles/:id', (req, res) => {
    Profile.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.json({ success: true });
    });
});