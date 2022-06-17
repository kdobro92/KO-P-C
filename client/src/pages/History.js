/* eslint-disable react/no-unescaped-entities */
function History() {
  return (
    <div className="his-container">
      <h3 className="his-title">연혁</h3>
      <div className="inner-container">
        <img className="his-img" src="img/history.png" alt="history" />
      </div>
      <div className="txt-in">
        <span>S-SRC HISTORY</span>
        <b>미래를 움직일 수 있는 힘 S-SRC의 연혁입니다.</b>
        <br />
        (주)Ko-P&C
      </div>
      <div className="his-wrap">
        <ul className="his-bx">
          <li className="his-data">
            <h2>제 1단계 (2006. 08 ~ 2007.06)</h2>
            <p>국내외 관련 문헌 검색 및 자료수집</p>
            <p>아이디어 도출 및 개념정리</p>
            <p>현존하는 건축 토목공법의 문제점 파악 및 개선점 도출</p>
          </li>
          <li className="his-data">
            <h2>제 2단계 (2007. 08 ~ 2008. 06)</h2>
            <p>합성보 단면의 형상개 </p>
            <p>특허출원</p>
            <p>시공성 및 경제성 분석</p>
            <p>시공방법 고안 및 개선점 개발</p>
            <span />
          </li>
          <li className="his-data">
            <h2>제 3단계 (2008. 06 ~ 2009. 02)</h2>
            <p>현장 적용 및 시공</p>
            <p>시공 개선안 분석 및 개발</p>
            <p>경제성 평가</p>
            <p>시공성 고려한 신공법 개발연구</p>
          </li>
          <li className="his-data">
            <h2>제 4단계 (2009. 06 ~ 2010. 04)</h2>
            <p>Engineering 회사설립(주식회사 Ko-P&C)</p>
            <p>구조 설계 및 시공 지침 수립</p>
            <p>경제성 평가 및 학술지 게제 준비</p>
            <p>20여개 현장설계에 특허공법 적용 시공</p>
            <p>추가 개선안 고려 및 2차 특허 준비</p>
          </li>
          <li className="his-data">
            <h2>제 5단계 (2011. 06 ~ 2012)</h2>
            <p>특허 획득(특허 제 10-1043531)</p>
            <p>국제 특허 및 2차 특허 준비</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default History;
