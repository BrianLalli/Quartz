// const mongoose = require('mongoose')
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const User = require('./userModel');
class Project extends Model{}

Project.init({
  
    projectId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    projectName:{
        type:DataTypes.STRING,
        allowNull: false,
       
    },
    projectCost:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    user_id:{
        type: DataTypes.INTEGER,
        refernces: {
            model: 'userModel',
            key: 'id',
            unique: false
        }},
    
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'project'
          }    
);

module.exports= Project;










//mongoose schema
//the is the schema for mongoDB
// const ProjectSchema = new mongoose.Schema({
//     name: String,
//     id: Number,
//     deadline: String,
//     budget: String,
//     status: String,
// // },
// user_id:{
//     type: DataTypes.INTEGER,
//     refernces: {
//         model: 'userModel',
//         key: 'id',
//         unique: false
//     }}

// }
// )


// module.exports = mongoose.model('Project', ProjectSchema)

