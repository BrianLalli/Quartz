const express = require('express');
const { getProjects, setProject, updateProject, deleteProject } = require('../controller/projectController');
const router = express.Router();
const cors = require('cors');

//send get and post routes to controller
router.route('/').get(getProjects).post(setProject)

//send delete and put requests to the /:ID specific controller
router.route('/:id').delete(deleteProject).put(updateProject)

router.use(cors()); 

module.exports = router;