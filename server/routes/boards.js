const router = require("express").Router();
const boardsController = require("../controllers/boards");
const multer = require("multer");
const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");
const { boards, users, sequelize } = require("../models");

router.get("/", boardsController.getAllPosts);
router.get("/:id", boardsController.getPostDetail);

// 이미지 업로드용 라우터
try {
  // 폴더 저장 경로가 존재하지 않는 경우 폴더 만들어주기
  console.log("images 폴더가 존재합니다.");
  fs.accessSync("images");
} catch (err) {
  console.log("images 폴더를 생성합니다.");
  fs.mkdirSync("images");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "images/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // 파일 이름
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      done(
        null,
        basename +
          "-" +
          new Date().getFullYear() +
          "-" +
          ("00" + month.toString()).slice(-2) +
          "-" +
          ("00" + day.toString()).slice(-2) +
          ext
      ); // 파일이름+시간+확장자명
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024, files: 20 },
});

let fileNames = [];
router.post("/images", upload.array("file"), (req, res) => {
  req.files.forEach((v) => {
    fileNames.push(`${v.filename}`);
  });
  res.json(req.files.map((v) => v.filename));
});

router.post("/", async (req, res) => {
  const { user_email_addr, user_pwd, put_titl_cont, put_deta_cont } = req.body;
  const userInfo = await users.findOne({
    where: {
      user_email_addr,
      user_pwd,
    },
  });

  try {
    if (!userInfo) {
      return res.status(401).send("<script>alert</script>");
    } else {
      const createBoards = await boards.create({
        put_titl_cont,
        put_deta_cont,
        file_name: `${fileNames}`,
        user_id: userInfo.id,
      });
      fileNames = [];
      return res.status(201).json({ data: createBoards, message: "작성 완료" });
    }
  } catch (err) {
    return res.status(500).json({ message: "서버 에러" });
  }
});

router.patch("/:id", async (req, res) => {
  const { user_email_addr, user_pwd, put_titl_cont, put_deta_cont } = req.body;
  // 유저 정보 조회
  const userInfo = await users.findOne({
    where: {
      user_email_addr,
    },
  });
  // 해당 유저가 DB에 저장된 유저라면
  if (userInfo && bcrypt.compareSync(user_pwd, userInfo.dataValues.user_pwd)) {
    try {
      // 아이디로 해당 포스트 정보 조회
      const { id } = req.params;
      const searchPost = await boards.findOne({
        where: { id },
      });
      // 조회되는 포스트가 있다면
      if (searchPost) {
        if (userInfo.id === searchPost.dataValues.user_id) {
          await boards.update(
            {
              put_titl_cont,
              put_deta_cont,
              file_name: `${fileNames}`,
              user_id: userInfo.id,
            },
            {
              where: { id },
            }
          );
          fileNames = [];
          return res
            .status(200)
            .json({ data: searchPost, message: "수정 완료" });
        }
      }
    } catch (err) {
      return res.status(500).json({ message: "서버 에러" });
    }
  } else {
    return res.send("<script>alert</script>");
  }
});

router.post("/:id", async (req, res) => {
  const { user_email_addr, user_pwd } = req.body;
  const userInfo = await users.findOne({
    where: {
      user_email_addr,
    },
  });
  if (userInfo && bcrypt.compareSync(user_pwd, userInfo.dataValues.user_pwd)) {
    try {
      const { id } = req.params;
      const searchPost = await boards.findOne({
        where: { id },
      });
      if (searchPost) {
        if (userInfo.id === searchPost.dataValues.user_id) {
          await boards.destroy({ where: { id } });
          res.status(200).json({ message: "삭제 완료" });
        } else {
          return res.status(401).json({ message: "권한이 없습니다." });
        }
      }
    } catch (err) {
      return res.status(500).json({ message: "서버 에러" });
    }
  }
}),
  (module.exports = router);
