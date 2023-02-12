const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

class JobOffer extends Sequelize.Model {}
JobOffer.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  service_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  offer_price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'job_offer'
});

sequelize.sync({force: false})
  .then(() => {
    console.log(`JobOffer table has been successfully recreated`);
})
  .catch(error => {
    console.error('Error creating JobOffer table: ', error);
});

module.exports = JobOffer;