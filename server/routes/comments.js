const router = require("express").Router();
const commentController = require("../controllers/comments");

router.post("/", commentController.createComment);
// router.put("/", commentController.modifyComment);
// router.delete("/:commentId", commentController.deleteComment);
// router.get("/", commentController.getAllComment);

module.exports = router;
