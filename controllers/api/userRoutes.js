const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = User.findAll(
            {
                include: [{ model: User }]
            }
        );

        if (!userData) {
            res.status(404).json({ message: "No user data" });
            return;
        }

        const users = userData.map( (user) => user.get({ plain: true }));
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = User.findAll(
            {
                include: [{ model: User }]
            },
            {
                where: { id: userId }
            }
        );

        if (!userData) {
            res.status(404).json({ message: "No user found with that id" });
            return;
        }

        const users = usersData.map((user) => { user.get({ plain: true })});
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                view_preference: req.body.view_preference
            }
        );
        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const userData = await User.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                view_preference: req.body.view_preference
            },
            {
                where: {
                    id: req.params.userId,
                }
            }
        );
        res.status(200).json(userData.get({ plan: true }));
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userData = await user.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(userData.get({ plan: true }));
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;