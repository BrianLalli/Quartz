const Users = require('./userModel');
const Project = require('./projectModel');

Users.hasMany(Project, {
    foreignKey: 'project_id',
});

Project.hasMany(Users, {
    foreignKey: 'user_id',
});