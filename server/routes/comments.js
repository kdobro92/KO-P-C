const router = require("express").Router();
const commentsController = require("../controllers/comments");

router.post("/", commentsController.createComment);
// router.post("/:id", commentsController.deleteComment);
// router.get("/boards/:id/comments", commentsController.getAllComments);
// router.patch("/", commentsController.editComment);

module.exports = router;
