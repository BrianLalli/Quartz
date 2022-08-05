const express = require('express');
const router = express.Router();
const cors = require('cors');
const { Router } = require('express');
const {getUsers, createUser, updateUser, deleteUser}= require('../controller/usersController')

router.route('/:id').get(getUsers).put(updateUser).delete(deleteUser).post(createUser);


module.exports = router;