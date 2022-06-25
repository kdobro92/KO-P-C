const dotenv = require("dotenv");
const { comments, users } = require("../models");
dotenv.config();
// const { isAuthorized } = require("./tokenFunctions");

module.exports = {
  createComment: async (req, res) => {
    const { put_deta_cont } = req.body;
    console.log(put_deta_cont);
    if (!put_deta_cont) {
      return res.json({ message: "잘못된 정보 입력" });
    }
    try {
      const isCreated = await comments.create({
        put_deta_cont,
        board_id,
        // userId: token.id,
      });
      return res.status(201).json({ data: isCreated, message: "작성 완료" });
    } catch (err) {
      return res.status(500).json({ message: "서버 에러" });
    }
    // res.status(401).json({ message: "인증 실패" });
  },

  // modifyComment: async (req, res) => {
  //   const { commentId } = req.params;

  //   try {
  //     const checkChatContents = await chatcontents.findAll({
  //       order: [["createdAt", "DESC"]],
  //       where: {
  //         chatroomId: chatroomId,
  //       },
  //     });
  //     return res.status(200).json({ checkChatContents });
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json({ message: "서버 에러" });
  //   }
  // },

  // createComment: async (req, res) => {
  //   const { commentId } = req.params;

  //   try {
  //     const checkChatContents = await chatcontents.findAll({
  //       order: [["createdAt", "DESC"]],
  //       where: {
  //         chatroomId: chatroomId,
  //       },
  //     });
  //     return res.status(200).json({ checkChatContents });
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json({ message: "서버 에러" });
  //   }
  // },

  // getAllComment: async (req, res) => {
  //   const { commentId } = req.params;

  //   try {
  //     const checkChatContents = await chatcontents.findAll({
  //       order: [["createdAt", "DESC"]],
  //       where: {
  //         chatroomId: chatroomId,
  //       },
  //     });
  //     return res.status(200).json({ checkChatContents });
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json({ message: "서버 에러" });
  //   }
  // },
};
