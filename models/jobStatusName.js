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
        status_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, 
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'job_status_name',
},
);

module.exports = JobStatusName;