const { Project, User, Comment } = require('../models')
const asyncHandler = require('express-async-handler')
const { v4: uuidv4 } = require("uuid");


const getComments = asyncHandler((req, res) => {
    const id = req.params.id;
    try {
        Comment.findAll().then((data) => {
            res.status(200).json(JSON.parse(data).filter((item) => item.project_id == id))
        })
    } catch (error) {
        console.error('There Was An Error Getting Comments - ', error)
        res.sendFile(path.join(__dirname, '../../public/404image.jpg'))
    }
})

const newComment = ((req, res) => {
    const project_id = req.params.id;

    console.log(req.body);

    const { name, comment } = req.body;

    if (req.body) {
        const newcomment = {
            name,
            comment,
            project_id,
            comment_id: uuidv4(),
        };

        readAndAppend(newcomment, "./seeds/commentsData.json");
        res.json("Comment created.");
    } else {
        res.error("Error adding comment.");
    }
})


module.exports = {
    getComments,
    newComment,

}
