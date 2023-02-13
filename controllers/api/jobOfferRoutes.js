const router = require('express').Router();
const { JobOffer, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const jobOfferData = JobOffer.findAll(
            {
                include: [{ model: User }]
            }
        );

        if (!jobOfferData) {
            res.status(404).json({ message: "No job offer data found" });
            return;
        }

        const jobOffers = jobOfferData.map( (jobOffer) => jobOffer.get({ plain: true }));
        res.status(200).json(jobOffers);

    } catch (err) {
        res.status(500).json(err);
    }
});

