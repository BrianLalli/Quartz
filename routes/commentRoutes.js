const router = require('express').Router();
const { getComments, newComment } = require('../controllers/commentController')
const catchAllError = require('../controllers/catchAllcontroller')


// GET Route for retrieving all the comments
router.route("/:id").get(getComments)

// POST Route for a new UX/UI comment
router.route("/:id").post(newComment)

router.route('*').get(catchAllError)


module.exports = router;
