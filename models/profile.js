const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        view_type: {
            type: DataType.STRING,
            allowNull: false
        },
        bio: {
            type: DataType.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
    }
);