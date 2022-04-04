const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Location extends Model {};

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscore: true,
    modelName: 'location'
  }
);

module.exports = Location;
