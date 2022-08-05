const Users = require('./userModel');
const Project = require('./projectModel');
const ProjectManager = require('./projectManagerModel')

Users.belongsToMany(Project, {
    through:{
        model: ProjectManager,
        unique: false
    },
    as: 'project_team'
});

Project.belongsToMany(Users, {
    through:{
        model: ProjectManager,
        unique: false,
    },
    as: 'teams_assigned'
});

module.exports ={Users, Project, ProjectManager};