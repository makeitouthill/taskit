const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class ServiceRange extends Sequelize.Model {}
ServiceRange.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  service_provider_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  range_miles: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'service_range'
});

sequelize.sync({force: false})
  .then(() => {
    console.log(`ServiceRange table has been successfully recreated`);
})
  .catch(error => {
    console.error('Error creating ServiceRange table: ', error);
});

module.exports = ServiceRange;