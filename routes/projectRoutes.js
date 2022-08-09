const router = require('express').Router();
const { Project } = require('../models');
const { getProjects, createProjects, deleteProjects, updateProject, getProjectById, getProjectbyName } = require('../controllers/projectController')


//calling functions to create projects and get all projects when they hit the /api/projects route
router.route('/').get(getProjects).post(createProjects)

//calling functions to delete and update projects when they hit the /api/projects/:id route
router.route('/:id').delete(deleteProjects).put(updateProject).get(getProjectById).get(getProjectbyName)


module.exports = router;
