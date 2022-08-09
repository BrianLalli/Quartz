const router = require('express').Router();
const { getHomepage, getProjectPage, getDashboard, getSpecificProjectPage, userAccountPage, logInPage } = require('../controllers/homeController')
const catchAllError = require('../controllers/catchAllcontroller')

// function to call the homepage
router.route("/").get(getHomepage)

// function to call project page
router.route("/projects").get(getProjectPage)

router.route("/dashboard").get(getDashboard)

router.route("/project/:id").get(getSpecificProjectPage)

router.route("/profile").get(userAccountPage)

router.route("/login").get(logInPage)

router.route('*').get(catchAllError)


module.exports = router;
