const router = require('express').Router();
const { getHomepage, getProjectPage, getDashboard, getSpecificProjectPage, userAccountPage, logInPage } = require('../controllers/homeController')

// function to call the homepage
router.route("/").get(getHomepage)

// function to call project page
router.route("/projects").get(getProjectPage)

router.route("/dashboard").get(getDashboard)

router.route("/project/:id").get(getSpecificProjectPage)

router.route("/profile").get(userAccountPage)

router.route("/login").get(logInPage)


module.exports = router;
