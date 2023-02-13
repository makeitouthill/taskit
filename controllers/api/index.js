const router = require('express').Router();
const userRoutes = require('./userRoutes');
const servicesRoutes = require('./servicesRoutes');
const jobOfferRoutes = require('./jobOfferRoutes');
const serviceRangeRoutes = require('./serviceRangeRoutes');
const locationRoutes = require('./locationRoutes');
const profileRoutes = require('./profileRoutes');


router.use('/users', userRoutes);
router.use('/services', servicesRoutes);
router.use('/job-offers', jobOfferRoutes);
router.use('/service-range', serviceRangeRoutes);
router.use('/locations', locationRoutes);
router.use('/profiles', profileRoutes);

module.exports = router;
