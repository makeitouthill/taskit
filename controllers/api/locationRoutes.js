const router = require('express').Router();
const { Location, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const locationData = findAll(
            {
                include: [{ model: User }]
            },
            {
                where: {
                    user_id: userId
                }
            }
        );
        const locations = locationData.map((location) => {location.get({ plain: true });});

        res.status(200).json(locations);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const locationData = findByPk(
            {
                include: [{ model: User }]
            },
            {
                where: {
                    id: id
                }
            }
        );

        res.status(200).json(locationData.get({ plain: true }));
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create(
            {
                user_id: req.body.user_id,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                lat: req.body.lat,
                long: req.body.long
            }
        );
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;