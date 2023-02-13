const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JobLocation extends Model {}

JobLocation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        job_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'job_location',
    }
);
