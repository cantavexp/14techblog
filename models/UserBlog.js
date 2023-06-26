const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
// const { UserLogin } = require('.');

class UserBlog extends Model {}

UserBlog.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    user_data: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_data_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'userblog',
    }
);
  
  module.exports = UserBlog;