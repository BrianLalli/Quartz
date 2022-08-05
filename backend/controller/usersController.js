//To Do:
//Add Users Controller
const asyncHandler = require('express-async-handler')
const colors = require('colors')
const Users = require('../model/userModel')
// Add User Auth
    // Login
const loginController = asyncHandler(async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: res.body.email,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            res.session.loggedIn = true;
            // session knows which user is logged in
            req.session.userId = dbUserData._id;
            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})
    // Logout
const logoutController = asyncHandler(async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})
//get Users from db
//route GET /api/Users
const getUsers = asyncHandler(async (req, res) => {
    User.find().then((data) => {
        res.status(200).json(data)
    })
})

const getLoggedInUser = asyncHandler(async (req, res) => {
    if(req.session.loggedIn) {
        User.findOne({ _id: req.session.userId }).then((data) => {
            res.status(200).json(data)
        })
    }
})

const createUser = asyncHandler(async (req, res) => {
    console.info('New Project added to db'.green)
    User.create(req.body).then((data) => {
        res.status(200).json(data)
    })
})



//update User from db by ID
//route PUT /api/Users 
const updateUser = asyncHandler(async (req, res) => {
    const updatedUser = await User.findOneAndUpdate(
        { _id: req.session.userId },
        // { _id: req.params.userId },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );

    res.status(200).json({ message: `update User ${req.params.id}`,  updatedUser})
})

//get Users from db
//route GET /api/Users
const deleteUser = asyncHandler(async (req, res) => {
    User.destroy({ _id: req.session.userId }).then((data) => {
        res.status(200).json({ message: `delete User ${req.params.id}` })
    })
})

module.exports = {
    getProjects,
    setProject,
    updateProject,
    deleteProject,
    getUsers
}



