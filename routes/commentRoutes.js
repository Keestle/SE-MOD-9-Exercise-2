const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post('/create', (req, res) => {
  commentController.createComment(req.body, res);
});

// Add other comment-related routes as needed

module.exports = router;
