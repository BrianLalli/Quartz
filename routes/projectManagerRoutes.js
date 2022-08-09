const express = require('express');
const router = express.Router();
const { getManger, setManager, deleteManager, updateManager } = require('../controllers/projectManagerController');
const catchAllError = require('../controllers/catchAllcontroller')


router.route(':/id').get(getManger).post(setManager).delete(deleteManager).put(updateManager);
router.route('*').get(catchAllError)


