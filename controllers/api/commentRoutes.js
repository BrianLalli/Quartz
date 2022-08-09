const comments = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../../utils/fsUtils");

// GET Route for retrieving all the comments
comments.get("/:id", (req, res) => {
  const id = req.params.id;
  readFromFile("./seeds/commentsData.json").then((data) =>
    res.json(JSON.parse(data).filter((item) => item.project_id == id))
  );
});

// POST Route for a new UX/UI comment
comments.post("/:id", (req, res) => {
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
});

module.exports = comments;
