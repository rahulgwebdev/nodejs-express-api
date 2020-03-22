const express = require("express");
const postController = require("../controller/post.controller");
const router = express.Router();
const { isAuthenticated } = require("../middleware/auth");

router.get("/:skip/:limit", postController.getPosts);

router.post("/", isAuthenticated, postController.createPost);

router.get("/:id", postController.getSinglepost);

router.patch("/:id/comments", isAuthenticated, postController.createComment);

module.exports = router;