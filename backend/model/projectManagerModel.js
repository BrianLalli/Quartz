const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProjectManager extends Model{}

ProjectManager.init({
    id:{
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataType.STRING,
        allowNull: false,
    },
    completion:{
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
    },
    project_id:{
        type: DataType.INTEGER,
        references:{
            model: 'projectModel',
            key: 'id',
            unique: false
        }
    },
    user_id:{
        type: DataType.STRING,
        references:{
            model: 'userModel',
            key: 'id',
            unique: 'false'
        }
    }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'projectManager'
      }
);

module.exports = ProjectManager;