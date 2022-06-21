import { MdLibraryBooks, MdConstruction } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { GiStabbedNote } from "react-icons/gi";

function Service() {
  return (
    <div className="service-container">
      <div className="service-header">
        <span className="service-title">SERVICES</span>
        <h2 className="service-sub">How It Works</h2>
      </div>
      <div className="service-body">
        <div className="row-container one">
          <div className="row one">
            <MdLibraryBooks className="row-icon" />
          </div>
          <p>국내외 관련 문헌 검색 및 자료수집</p>
          <p>아이디어 도출 및 개념정리</p>
          <p>현존하는 건축 토목공법의 문제점 파악 및 개선점 도출</p>
        </div>
        <div className="row-container two">
          <div className="row two">
            <FaConnectdevelop className="row-icon" />
          </div>
          <p>합성보 단면의 형상개발</p>
          <p>특허출원</p>
          <p>시공성 및 경제성 분석</p>
          <p>시공방법 고안 및 개선점 개발</p>
        </div>
        <div className="row-container three">
          <div className="row three">
            <MdConstruction className="row-icon" />
          </div>
          <p>현장 적용 및 시공</p>
          <p>시공 개선안 분석 및 개발</p>
          <p>경제성 평가</p>
          <p>시공성 고려한 신공법 개발연구</p>
        </div>
        <div className="row-container four">
          <div className="row four">
            <GiStabbedNote className="row-icon" />
          </div>
          <p>Engineering 회사 설립</p>
          <p>구조 설계 및 시공 지침 수립</p>
          <p>경제성 평가 및 학술지 게제 준비</p>
          <p>추가 개선안 고려 및 2차특허 준비</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
