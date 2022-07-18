const router = require("express").Router();
const commentsController = require("../controllers/comments");

router.post("/", commentsController.createComment);
router.patch("/:id", commentsController.editComment);
router.post("/:id", commentsController.deleteComment);
// router.get("/boards/:id/comments", commentsController.getAllComments);

module.exports = router;
