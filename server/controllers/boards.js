const { users, boards, comments } = require("../models");

module.exports = {
  getAllPosts: async (req, res) => {
    try {
      const searchPost = await boards.findAll({
        attributes: [
          "id",
          "put_titl_cont",
          "put_deta_cont",
          "view_count",
          "file_name",
          "createdAt",
        ],
        include: [
          {
            model: users,
            attributes: ["user_email_addr"],
          },
        ],
      });
      return res
        .status(200)
        .json({ data: searchPost.reverse(), message: "조회 성공" });
    } catch (err) {
      return res.status(500).json({ message: "서버 에러" });
    }
  },

  getPostDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const searchPost = await boards.findOne({
        where: { id },
        attributes: [
          "id",
          "put_titl_cont",
          "put_deta_cont",
          "view_count",
          "file_name",
          "createdAt",
        ],

        include: [
          {
            model: users,
            attributes: ["user_email_addr"],
          },
          {
            model: comments,
            attributes: ["id", "put_deta_cont", "user_nickname"],
          },
        ],
      });
      await searchPost.increment({
        view_count: 1,
      });
      return res.status(200).json({
        data: searchPost,
        message: "조회 성공",
      });
    } catch (err) {
      return res.status(500).json({ message: "서버 에러" });
    }
  },
};
