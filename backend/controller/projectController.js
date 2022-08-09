const asyncHandler = require('express-async-handler')
const colors = require('colors')
const Project = require('../model/projectModel')

//get Projects from db
//route GET /api/Projects
const getProjects = asyncHandler(async (req, res) => {
   Project.findAll().then((data) => {
        res.status(200).json(data)
    })
    throw new Error (
        res.sendFile(path.join(__dirname, '../../public/404image.jpg'))
    )

});

const UserProjects = asyncHandler(async (req, res) => {
    if(req.session.loggedIn) {
        Project.findOne({ _id: req.session.userId }).then((data) => {
            res.status(200).json(data)
        })
        
        throw new Error (
            res.sendFile(path.join(__dirname, '../../public/404image.jpg'))
        );
    }

});

//add new Project to db
//route POST /api/Projects
const setProject = asyncHandler(async (req, res) => {
    console.info('New Project added to db'.green)
    Project.create(req.body).then((data) => {
        res.status(200).json(data)
    })
    throw new Error (
        res.sendFile(path.join(__dirname, '../../public/404image.jpg'))
    );
});

//update Project from db by ID
//route PUT /api/Projects 
const updateProject = asyncHandler(async (req, res) => {
    const updatedProject = await User.findOneAndUpdate(
        { _id: req.session.userId },
        // { _id: req.params.userId },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );

    res.status(200).json({ message: `update Project ${req.params.id}`,  updatedProject})
    throw new Error (
        res.sendFile(path.join(__dirname, '../../public/404image.jpg'))
    )
})

//get Projects from db
//route GET /api/Projects
const deleteProject = asyncHandler(async (req, res) => {
    console.info('New Project added to db'.green)
    Project.destroy({ _id: req.session.userId }).then((data) => {
        res.status(200).json({ message: `delete Project ${req.params.id}` })
    })
    throw new Error (
        res.sendFile(path.join(__dirname, '../../public/404image.jpg'))
    )
})



module.exports = {
    getProjects,
    setProject,
    updateProject,
    deleteProject,
    UserProjects
}