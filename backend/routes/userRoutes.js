const express = require('express');
const router = express.Router();
const { Router } = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controller/usersController')

router.route('/:id').put(updateUser).delete(deleteUser).post(createUser);

router.route('/').get(getUsers)

module.exports = router;