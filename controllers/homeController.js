const { Project, User } = require("../models");
const withAuth = require("../utils/auth");
const asyncHandler = require('express-async-handler')


// why are we calling the projects in the HOMEPAGE route?????
const getHomepage = asyncHandler(async (req, res) => {
    try {
        res.render("homepage");
    } catch (err) {
        res.status(500).json(err);
    }
})

//  CURRENTLY WORKING ON GRABBING THE USER NAME FROM SESSION
// SO THAT IT ONLY SHOWS CURRENT USERS PROJECT INSTEAD OF ALL
const getProjectPage = asyncHandler(async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const projectData = await Project.findOne({
            where: {
                id: req.session.user_id
            }
        });

        // Serialize data so the template can read it
        const projects = projectData.map((project) => project.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render("projects", {
            projects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

const getDashboard = asyncHandler(async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
        });

        // Serialize data so the template can read it
        const projects = projectData.map((project) => project.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render("dashboard", {
            projects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

const getSpecificProjectPage = asyncHandler(async (req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
        });

        const project = projectData.get({ plain: true });

        res.render("project", {
            ...project,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

const userAccountPage = (withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ["password"] },
            include: [{ model: Project }],
        });

        const user = userData.get({ plain: true });

        res.render("profile", {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

const logInPage = asyncHandler((req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //     res.redirect(userAccountPage);
    //     return;
    // }

    res.render("login");
})


module.exports = {
    getHomepage,
    getProjectPage,
    getDashboard,
    getSpecificProjectPage,
    userAccountPage,
    logInPage,
}