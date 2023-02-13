const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model {}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    service_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'Service',
=======
    modelName: 'service',
>>>>>>> 2c392d08d1553488b9f63c3b768ea4b4c0c5d870
  }
);

module.exports = Service;