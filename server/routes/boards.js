const router = require("express").Router();
const boardsController = require("../controllers/boards");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { boards } = require("../models");
// const { isAuthorized } = require("../controllers/tokenFunctions");

router.get("/", boardsController.getAllPosts);
router.get("/:id", boardsController.getPosts);
// router.get("/user/:id", boardsController.getMyPosts);
// router.delete("/:id", boardsController.deletePosts);
// router.put("/:id", boardsController.changeBoardStatus);

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
  console.log(upload);
  req.files.forEach((v) => {
    fileNames.push(`${v.filename}`);
  });
  res.json(req.files.map((v) => v.filename));
});

router.post("/", async (req, res) => {
  try {
    const { put_titl_cont, put_deta_cont } = req.body;
    const createBoards = await boards.create({
      put_titl_cont,
      put_deta_cont,
      file_name: `${fileNames}`,
      // userId: userInfo.id,
    });
    fileNames = []; // 지우면 안돼요..
    return res.status(200).json({ data: createBoards, message: "작성 완료" });
  } catch (err) {
    return res.status(500).json({ message: "서버 에러" });
  }
  //   return res.status(401).json({ message: "권한 없음" });
});

// router.patch("/:id", async (req, res) => {
//   const userInfo = isAuthorized(req);
//   if (userInfo) {
//     try {
//       const { id } = req.params;
//       const searchPost = await boards.findOne({
//         where: { id },
//       });
//       if (searchPost) {
//         const {
//           title,
//           description,
//           tags,
//           latitude,
//           longitude,
//           mainAddress,
//           detailAddress,
//           // status,
//         } = req.body;
//         if (userInfo.id === searchPost.dataValues.userId) {
//           await boards.update(
//             {
//               title,
//               description,
//               tags,
//               latitude,
//               longitude,
//               mainAddress,
//               detailAddress,
//               // status,
//               image: `${fileNames}`,
//               userId: userInfo.id,
//             },
//             {
//               where: { id },
//             }
//           );
//           fileNames = [];
//           return res
//             .status(200)
//             .json({ data: searchPost, message: "수정 완료" });
//         }
//       } else {
//         return res.status(400).json({ message: "권한이 없습니다." });
//       }
//     } catch (err) {
//       return res.status(500).json({ message: "서버 에러" });
//     }
//   }
// }),
module.exports = router;
