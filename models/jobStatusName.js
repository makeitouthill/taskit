const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JobStatusName extends Model {}

JobStatusName.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        state_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, 
{
  sequelize,
  modelName: 'job_status_name'
},
);

module.exports = JobStatusName;