const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const { users } = require("../models");

// const {
//   generateAccessToken,
//   sendAccessToken,
//   isAuthorized,
// } = require("../controllers/tokenFunctions");

module.exports = {
  signup: async (req, res) => {
    const { user_email_addr, user_pwd } = req.body;
    if (!user_email_addr || !user_pwd) {
      return res.json({ message: "필수 항목을 입력하세요." });
    }
    try {
      const userInfo = await users.findOne({
        where: { user_email_addr },
      });
      // 비밀번호 암호화하기
      const hashed = await bcrypt.hash(user_pwd, 10);

      if (userInfo) {
        return res
          .status(403)
          .res.json({ message: "이미 사용중인 이메일입니다." });
      } else {
        await users.create({
          user_email_addr,
          user_pwd: hashed,
        });
        return res.status(201).json({ message: "가입 완료" });
      }
    } catch (err) {
      return res.status(500).json({ message: "서버 에러" });
    }
  },

  // login: async (req, res) => {
  //   const { user_email_addr, user_pwd } = req.body;

  //   try {
  //     const userInfo = await users.findOne({ where: { user_email_addr } });
  //     if (
  //       !userInfo ||
  //       !bcrypt.compareSync(user_pwd, userInfo.dataValues.user_pwd)
  //     ) {
  //       return res.json({ message: "잘못된 정보를 입력" });
  //     } else {
  //       delete userInfo.dataValues.user_pwd;
  //       const accessToken = generateAccessToken(userInfo.dataValues);
  //       sendAccessToken(res, accessToken);
  //     }
  //   } catch (err) {
  //     return res.status(500).json({ message: "서버 에러" });
  //   }
  // },

  // logout: (req, res) => {
  //   // 토큰을 통해 인증된 사용자인지 확인 후 로그아웃 진행
  //   const userInfo = isAuthorized(req);
  //   try {
  //     if (userInfo) {
  //       return res
  //         .clearCookie("jwt", {
  //           sameSite: "None",
  //           secure: true,
  //           httpOnly: true,
  //         })
  //         .status(200)
  //         .json({ message: "로그아웃 성공" });
  //     } else {
  //       return res.json({ message: "이미 로그아웃 된 상태입니다." });
  //     }
  //   } catch (err) {
  //     return res.status(500).json({ message: "서버 에러" });
  //   }
  // },
};
