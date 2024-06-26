'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service.init({
    username: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    phone: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    link: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    deadline: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    serviceName: {
      allowNull: true,
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};