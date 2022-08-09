const express = require('express');
const router = express.Router();
const cors = require('cors');
const { Router } = require('express');
const {getUsers, createUser, updateUser, deleteUser}= require('../controller/usersController')

router.route('/:id').get(getUsers).put(updateUser).delete(deleteUser).post(createUser);

router.get('*', (req, res)=>
res.sendFile(path.join(_dirname, '../../public/404image.jpg')));



module.exports = router;