const dotenv = require("dotenv");
const { comments } = require("../models");
dotenv.config();
// const { isAuthorized } = require("./tokenFunctions");

module.exports = {
  createComment: async (req, res) => {
    const { put_deta_cont, board_id } = req.body;

    if (!put_deta_cont) {
      return res.json({ message: "잘못된 정보 입력" });
    }
    try {
      const isCreated = await comments.create({
        put_deta_cont,
        board_id: board_id,
      });
      return res.status(201).json({ data: isCreated, message: "작성 완료" });
    } catch (err) {
      return res.status(500).json({ message: "서버 에러" });
    }
  },

  // getAllComments: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const isChecked = await comments.findAll({
  //       attributes: ["put_deta_cont"],
  //       where: {
  //         board_id: id,
  //       },
  //     });
  //     return res.status(201).json({ data: isChecked, message: "작성 완료" });
  //   } catch (err) {
  //     return res.status(500).json({ message: "서버 에러" });
  //   }
  // },
};
