import { FiMapPin } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import React from "react";

function Content() {
  return (
    <div className="content-container">
      <div className="content-inner">
        <div className="card-container one">
          <div className="circle">
            <FiMapPin className="circle-icon" />
          </div>
          <p>
            <span className="subTitle">Address : </span> 서울특별시 마포구
            <br />
            서교동 449-14
          </p>
        </div>
        <div className="card-container">
          <div className="circle">
            <BsTelephone className="circle-icon" />
          </div>
          <p>
            <span className="subTitle">Phone:</span> + 82-2-338-0008
          </p>
        </div>
        <div className="card-container">
          <div className="circle">
            <MdOutlineMail className="circle-icon" />
          </div>
          <p>
            <span className="subTitle">Email:</span> info@yoursite.com
          </p>
        </div>
        <div className="card-container">
          <div className="circle">
            <CgWebsite className="circle-icon" />
          </div>
          <p>
            <span className="subTitle">Website:</span> s-src.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
