const router = require("express").Router();
const commentsController = require("../controllers/comments");

router.post("/", commentsController.createComment);
// router.get("/boards/:id/comments", commentsController.getAllComments);
// router.patch("/", commentsController.editComment);
// router.delete("/:commentId", commentsController.deleteComment);

module.exports = router;
