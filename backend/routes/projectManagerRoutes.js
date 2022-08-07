const express = require('express');
const router = express.Router();
const cors = require('cors');
const { Router } = require('express');
const {getManger, setManager, deleteManager, updateManager}= require('../controller/projectManagerController');

router.route(':/id').get(getManger).post(setManager).delete(deleteManager).put(updateManager);