/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Contact from "../../pages/Contact";
import History from "../../pages/History";
import Greeting from "./Greeting";

function Banner() {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "인사말", content: <Greeting /> },
    { name: "연혁", content: <History /> },
    { name: "오시는 길", content: <Contact /> },
  ];

  const selectMenuHanlder = (index) => {
    setCurrentTab(index);
  };
  return (
    <div className="wrap">
      <div className="thumbnail">
        <img src="/img/contact.png" alt="meeting" className="intro-img" />
        <div className="intro-container">
          <h2 className="intro-title">회사소개</h2>
        </div>
        <div className="banner-container">
          <ul className="banner-inner">
            {menuArr.map((menu, idx) => {
              return (
                <div className="area-box">
                  <li
                    key={idx}
                    className={currentTab === idx ? "focused" : "banner-menu"}
                    onClick={() => selectMenuHanlder(idx)}
                  >
                    {menu.name}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="desc">
        <p>{menuArr[currentTab].content}</p>
      </div>
    </div>
  );
}

export default Banner;
