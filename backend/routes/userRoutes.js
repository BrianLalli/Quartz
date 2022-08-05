const express = require('express');
const { getProjects, setProject, updateProject, deleteProject } = require('../controller/projectController');
const router = express.Router();
const cors = require('cors');
const { Router } = require('express');

Router.route('/').get(getUsers);