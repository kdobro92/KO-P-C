/* eslint-disable no-alert */
/* eslint-disable camelcase */
import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Image from "./Image";

function Modal({ setPosts, handleModal }) {
  // const { id } = useParams();
  const navigate = useNavigate();
  const inputTitleRef = useRef(null);
  const [user_email_addr, setUser_email_addr] = useState("");
  const [user_pwd, setUser_pwd] = useState("");
  const [put_titl_cont, setPut_titl_cont] = useState("");
  const [file_name, setFile_name] = useState("");
  const [put_deta_cont, setPut_deta_cont] = useState("");
  const defaultImage = "img/defaultimage.png";

  const totalData = {
    user_email_addr,
    user_pwd,
    put_titl_cont,
    put_deta_cont,
  };
  useEffect(() => {
    if (inputTitleRef.current !== null) inputTitleRef.current.focus();
  }, []);

  const userEmaiilHandler = (e) => {
    setUser_email_addr(e.target.value);
  };
  const userPwdHandler = (e) => {
    setUser_pwd(e.target.value);
  };
  const titleValueHandler = (e) => {
    setPut_titl_cont(e.target.value);
  };

  const contentValueHandler = (e) => {
    setPut_deta_cont(e.target.value);
  };

  const totalRequestData = async () => {
    if (!user_email_addr || !user_pwd) {
      alert("이메일 또는 비빌번호를 입력해주세요");
    } else if (!put_titl_cont) {
      alert("제목을 입력해주세요");
    } else if (!put_deta_cont) {
      alert("내용을 입력해주세요");
    } else {
      try {
        const data = new FormData();
        for (const key in file_name) {
          if (Object.prototype.hasOwnProperty.call(file_name, key)) {
            data.append("file", file_name[key]);
          }
        }
        const result = await axios.post(
          `${process.env.REACT_APP_API_URL}/boards/images`,
          data,
          {
            withCredentials: true,
          },
        );
        if (result.status === 200) {
          await axios
            .post(`${process.env.REACT_APP_API_URL}/boards`, totalData, {
              widthCredentials: true,
            })
            .then((res) => {
              if (res.status === 201) {
                alert("등록 완료");
                setPosts(res.data.data);
                navigate(`/boards/${res.data.data.id}`);
              } else {
                alert(
                  "등록되지 않은 사용자입니다. 회원가입 페이지로 이동합니다.",
                );
                // navigate("/signup");
              }
            });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-view">
          <div className="modal-header">
            <button type="button" className="btn-close" onClick={handleModal}>
              <AiOutlineClose className="close-icon" />
            </button>
          </div>
          <div className="user-container">
            <input
              className="user-id_input"
              type="text"
              placeholder="이메일을 입력해주세요"
              maxLength={20}
              onChange={userEmaiilHandler}
              value={user_email_addr}
            />
            <input
              className="user-pwd_input"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              maxLength={20}
              onChange={userPwdHandler}
              value={user_pwd}
            />
          </div>
          <div className="modal-title-container">
            <input
              className="title-input"
              type="text"
              placeholder="제목을 입력해주세요."
              maxLength={70}
              onChange={titleValueHandler}
              value={put_titl_cont}
            />
          </div>
          <div className="divide-half">
            <Image setFile_name={setFile_name} />
            <div className="modal-content-container">
              <textarea
                className="content-input"
                type="text"
                placeholder="내용을 입력해주세요."
                maxLength={500}
                onChange={contentValueHandler}
                value={put_deta_cont}
              />
            </div>
          </div>
          <div className="btn-container">
            <button type="button" className="close-btn" onClick={handleModal}>
              취소
            </button>
            <button
              type="button"
              className="save-btn"
              onClick={totalRequestData}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
