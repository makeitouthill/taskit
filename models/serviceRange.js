const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');

class ServiceRange extends Model {}

ServiceRange.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    service_provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    range_miles: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, 
{
  sequelize,
  modelName: 'service_range'
}
);

sequelize.sync(
    {
      force: false
    }
  )
  .then(() => {
    console.log(`ServiceRange table has been successfully recreated`);
  }
  )
  .catch(error => {
    console.error('Error creating ServiceRange table: ', error);
  }
);
module.exports = ServiceRange;