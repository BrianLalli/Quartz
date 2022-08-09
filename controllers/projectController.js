const { Project, User } = require('../models')
const asyncHandler = require('express-async-handler')

const getProjects = asyncHandler(async (req, res) => {
    try {
        Project.findAll().then((data) => {
            res.status(200).json(data)
        })
    } catch (error) {
        console.error('There Was An Error', error)
        res.sendFile(path.join(__dirname, '../../public/404image.jpg'))
    }
})

// function to get project by id
const getProjectById = asyncHandler(async (req, res) => {
    try {
        Project.findOne({
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.status(200).json(data)
        })

    } catch (err) {
        res.status(400).json(err);
    }
})

const getProjectbyName = asyncHandler(async (req, res) => {
    try {
        Project.findOne({
            where: {
                name: req.params.name
            }
        }).then((data) => {
            res.status(200).json(data)
        })

    } catch (err) {
        res.status(400).json(err);
    }

})

const createProjects = asyncHandler(async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});

const deleteProjects = asyncHandler(async (req, res) => {
    try {
        const projectData = await Project.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!projectData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(400).json(err);
    }
})

const updateProject = asyncHandler(async (req, res) => {
    try {
        const updatedProject = await User.findOneAndUpdate(
            { _id: req.session.userId },
            // { _id: req.params.userId },
            { $addToSet: { savedBooks: body } },
            { new: true, runValidators: true }
        );

        res.status(200).json({ message: `update Project ${req.params.id}`, updatedProject })
    } catch (error) {
        res.sendFile(path.join(__dirname, '../../public/404image.jpg'))
    }
})
// this looks like an update project function?? im not sure where this goes or why it was in home routes
// router.put("/projects/:id", async (req, res) => {
//     try {
//         const modifData = await Project.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });
//         console.log(modifData);
//         if (!modifData) {
//             res.status(404).json({ message: "No project found with this id!" });
//             return;
//         }

//         res.status(200).json(modifData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });




module.exports = {
    getProjects,
    createProjects,
    deleteProjects,
    updateProject,
    getProjectById,
    getProjectbyName,

}