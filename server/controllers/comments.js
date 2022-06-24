const dotenv = require("dotenv");
const { comments, users } = require("../models");
dotenv.config();
// const { isAuthorized } = require("./tokenFunctions");

module.exports = {
  createComment: async (req, res) => {
    const { commentId } = req.params;

    try {
      const checkChatContents = await chatcontents.findAll({
        order: [["createdAt", "DESC"]],
        where: {
          chatroomId: chatroomId,
        },
      });
      return res.status(200).json({ checkChatContents });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "서버 에러" });
    }
  },

  modifyComment: async (req, res) => {
    const { commentId } = req.params;

    try {
      const checkChatContents = await chatcontents.findAll({
        order: [["createdAt", "DESC"]],
        where: {
          chatroomId: chatroomId,
        },
      });
      return res.status(200).json({ checkChatContents });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "서버 에러" });
    }
  },

  createComment: async (req, res) => {
    const { commentId } = req.params;

    try {
      const checkChatContents = await chatcontents.findAll({
        order: [["createdAt", "DESC"]],
        where: {
          chatroomId: chatroomId,
        },
      });
      return res.status(200).json({ checkChatContents });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "서버 에러" });
    }
  },

  getAllComment: async (req, res) => {
    const { commentId } = req.params;

    try {
      const checkChatContents = await chatcontents.findAll({
        order: [["createdAt", "DESC"]],
        where: {
          chatroomId: chatroomId,
        },
      });
      return res.status(200).json({ checkChatContents });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "서버 에러" });
    }
  },
};
