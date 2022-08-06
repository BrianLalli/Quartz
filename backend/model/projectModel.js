const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// const User = require('./userModel');


class Project extends Model { }

Project.init({

    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    projectCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    user_id: {
        type: DataTypes.INTEGER,
        refernces: {
            model: 'userModel',
            key: 'id',
            unique: false
        }
    },

    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
},
    { sequelize }
);

module.exports = Project;

