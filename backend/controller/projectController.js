const asyncHandler = require('express-async-handler')
const colors = require('colors')
const Project = require('../model/ProjectModel')

//get Projects from db
//route GET /api/Projects
const getProjects = asyncHandler(async (req, res) => {
    Project.find().then((data) => {
        res.status(200).json(data)
    })
})

const UserProjects = asyncHandler(async (req, res) => {
    if(req.session.loggedIn) {
        Project.findOne({ _id: req.session.userId }).then((data) => {
            res.status(200).json(data)
        })
    }
})

//add new Project to db
//route POST /api/Projects
const setProject = asyncHandler(async (req, res) => {
    console.info('New Project added to db'.green)
    Project.create(req.body).then((data) => {
        res.status(200).json(data)
    })
})

//update Project from db by ID
//route PUT /api/Projects 
const updateProject = asyncHandler(async (req, res) => {
    const updatedProject = await User.findOneAndUpdate(
        { _id: req.session.userId },
        // { _id: req.params.userId },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );

    res.status(200).json({ message: `update Project ${req.params.id}`,  updatedUser})
})

//get Projects from db
//route GET /api/Projects
const deleteProject = asyncHandler(async (req, res) => {
    console.info('New Project added to db'.green)
    Project.destroy({ _id: req.session.userId }).then((data) => {
        res.status(200).json({ message: `delete Project ${req.params.id}` })
    })
})



module.exports = {
    getProjects,
    setProject,
    updateProject,
    deleteProject
}