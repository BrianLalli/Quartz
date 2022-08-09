const router = require('express').Router();
const { createUser, logUserIn, logUserOut } = require('../controllers/userController')
const catchAllError = require('../controllers/catchAllcontroller')

// calling function to create a new user
router.route('/').post(createUser)

// calling function to log a user in
router.route('/login').post(logUserIn)

// calling function to log a user out
router.route('/logout').post(logUserOut)

// call the catch all function on error
router.route('*').get(catchAllError)

module.exports = router;
