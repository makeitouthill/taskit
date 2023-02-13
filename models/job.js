const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class job extends Model {}

job.init(
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

    },
    service_provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
,
    },
    description: {
      type: DataTypes.STRING,
    },
    invoice_amount: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
      
    },
    reject_accept: {
      type: DataTypes.INTEGER,
      allowNull: false,
    
    },
     estimated_completion_date: {
      type: DataTypes.DATE,
      allowNull: true,

    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    completion_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'job',
  }
);

module.exports = job;
  
