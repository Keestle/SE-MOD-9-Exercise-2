const express = require("express");
const router = express.Router();
const likeController = require("../controllers/likeController");

router.post('/create', (req, res) => {
  likeController.createLike(req.body, res);
});

// Add other like-related routes as needed

module.exports = router;
