const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get('/', (req, res) => {
  postController.getPosts(res);
});

router.post('/create', (req, res) => {
  postController.createPost(req.body, res);
});



module.exports = router;
