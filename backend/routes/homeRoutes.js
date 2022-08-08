const express = require('express');
const { getProjects, setProject, updateProject, deleteProject } = require('../controller/projectController');
const router = express.Router();
const cors = require('cors');

//render homepage
router.get('/', (req, res) => {
    try {
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/team', (req, res) => {
    try {
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/projects', (req, res) => {
    try {
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', (req, res) => {
    try {
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/project/:id', (req, res) => {
    try {
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', (req, res) => {
    try {
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    try {
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



//send delete and put requests to the /:ID specific controller
router.route('/:id').delete(deleteProject).put(updateProject).get(getProjects).post(setProject)

router.use(cors());

module.exports = router;