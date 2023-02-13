
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
  freezeTableName: true,
  underscored: true,
  modelName: 'service_range'
}
);

module.exports = ServiceRange;