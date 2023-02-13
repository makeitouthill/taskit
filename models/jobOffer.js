const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class JobOffer extends Model {}

JobOffer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        offer_price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, 
{
  sequelize,
  modelName: 'job_offer'
}
);

module.exports = JobOffer;