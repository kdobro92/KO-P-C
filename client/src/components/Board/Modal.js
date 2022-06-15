import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Image from "./Image";
import React from "react";

function Modal({ setPosts, handleModal }) {
  const navigate = useNavigate();
  const inputTitleRef = useRef(null);
  const [put_titl_cont, setPut_titl_cont] = useState("");
  const [file_name, setFile_name] = useState("");
  const [put_deta_cont, setPut_deata_cont] = useState("");
  const [list_count, setList_count] = useState(0);
  const totalData = {
    put_titl_cont,
    put_deta_cont,
    list_count,
  };

  useEffect(() => {
    if (inputTitleRef.current !== null) inputTitleRef.current.focus();
  }, []);

  const titleValueHandler = (e) => {
    setPut_titl_cont(e.target.value);
  };

  const contentValueHandler = (e) => {
    setPut_deata_cont(e.target.value);
  };

  const totalRequestData = async () => {
    if (!put_titl_cont) {
      alert("제목을 입력해주세요 ");
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
          "http://localhost:4000/boards/images",
          data,
          {
            withCredentials: true,
          }
        );
        if (result.status === 200) {
          await axios
            .post("http://localhost:4000/boards", totalData, {
              widthCredentials: true,
            })
            .then((res) => {
              alert("등록 완료");
              setPosts(res.data.data);
              navigate(`/boards/${res.data.data.id}`);
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
