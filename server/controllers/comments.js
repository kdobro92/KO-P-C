const dotenv = require("dotenv");
const { comments } = require("../models");
dotenv.config();

module.exports = {
  createComment: async (req, res) => {
    const { put_deta_cont, board_id, user_nickname } = req.body;
    if (!put_deta_cont || !user_nickname) {
      return res.status(401).json({ message: "잘못된 정보 입력" });
    } else {
      try {
        const isCreated = await comments.create({
          user_nickname,
          put_deta_cont,
          board_id: board_id,
        });
        return res
          .status(201)
          .json({ data: { isCreated }, message: "작성 완료" });
      } catch (err) {
        return res.status(500).json({ message: "서버 에러" });
      }
    }
  },

  editComment: async (req, res) => {
    const { user_nickname, put_deta_cont } = req.body;
    const userInfo = await comments.findOne({
      where: {
        user_nickname,
      },
    });
    if (userInfo) {
      try {
        const { id } = req.params;
        const searchComment = await comments.findOne({
          where: { id },
        });
        if (searchComment) {
          const isEdited = await comments.update(
            {
              put_deta_cont,
            },
            {
              where: { id },
            }
          );
          return res.status(200).json({ data: isEdited, message: "수정 완료" });
        }
      } catch (err) {
        return res.status(500).json({ message: "서버 에러" });
      }
    } else {
      return res.status(401).json({ message: "잘못된 정보 입력" });
    }
  },

  deleteComment: async (req, res) => {
    const { user_nickname } = req.body;
    const userInfo = await comments.findOne({
      where: {
        user_nickname,
      },
    });
    if (userInfo) {
      try {
        const { id } = req.params;
        const searchComment = await comments.findOne({
          where: { id },
        });
        if (searchComment) {
          await comments.destroy({ where: { id } });
          res.status(200).json({ message: "삭제 완료" });
        } else {
          return res.status(401).json({ message: "권한이 없습니다." });
        }
      } catch (err) {
        return res.status(500).json({ message: "서버 에러" });
      }
    }
  },
};
