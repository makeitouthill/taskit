const seedAccounts = require('./account-seeds');
const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');


    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');
    
    await seedJobStatusName();
    console.log('\n----- JOB STATUE NAMES SEEDED -----\n');

    await seedService();
    console.log('\n----- SERVICES SEEDED -----\n');

    await seedServiceRange();
    console.log('\n----- SERVICE RANGES SEEDED -----\n');

    await seedLocation();
    console.log('\n----- LOCATIONS SEEDED -----\n');

    await seedProfile();
    console.log('\n----- PROFILES SEEDED -----\n');

    await seedJobOffer();
    console.log('\n----- JOB OFFERS SEEDED -----\n');

    await seedJob();
    console.log('\n----- JOBS SEEDED -----\n');

    process.exit(0);
};

seedAll();
