const router = require("express").Router();
const commentsController = require("../controllers/comments");

router.post("/comments", commentsController.createComment);
// router.put("/", commentController.modifyComment);
// router.delete("/:commentId", commentController.deleteComment);
// router.get("/", commentController.getAllComment);

module.exports = router;
