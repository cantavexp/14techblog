const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
// const { Techblog } = require('.');

class TechBlog extends Model {}

TechBlog.init(
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'techblog',
    }

  );
  
  module.exports = TechBlog;