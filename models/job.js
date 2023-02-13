const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    service_provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, 
    },
    description: {
      type: DataTypes.STRING,
    },
    invoice_amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reject_accept: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
     estimated_completion_date: {
      type: DataTypes.DATE,
      allowNull: false,
     
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    completion_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Job',
  }
);

module.exports = Job;