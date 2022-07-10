const { users, boards, comments } = require("../models");
// const { isAuthorized } = require("./tokenFunctions");

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
            model: comments,
            attributes: ["put_deta_cont"],
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

  // deletePosts: async (req, res) => {
  //   const userInfo = isAuthorized(req);
  //   if (userInfo) {
  //     try {
  //       const { id } = req.params;
  //       const searchPost = await boards.findOne({
  //         where: { id },
  //       });
  //       if (searchPost) {
  //         if (userInfo.id === searchPost.dataValues.userId) {
  //           await boards.destroy({ where: { id } });
  //           res.status(200).json({ message: "삭제 완료" });
  //         } else {
  //           return res.status(400).json({ message: "권한이 없습니다." });
  //         }
  //       }
  //     } catch (err) {
  //       return res.status(500).json({ message: "서버 에러" });
  //     }
  //   }
  // },
};
