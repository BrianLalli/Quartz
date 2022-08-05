// To Do:
//Add Users Model
const mongoose = require('mongoose');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Users extends Model{}


//mongoose schema
//the is the schema for mongoDB
Users.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    user_role:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    project_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'projectModel',
            key: 'id',
            unique: false
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users'
  }
);

module.exports = mongoose.model('Users', UserSchema)
module.exports = Users;
