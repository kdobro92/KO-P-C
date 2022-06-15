/* eslint-disable react/no-unescaped-entities */
function Content() {
  return (
    <section className="content-wrap">
      <h3 className="inner-title">인사말</h3>
      <div className="box-container">
        <div className="inner-img">
          <img className="ceo-img" src="img/ceo2.png" alt="greeting" />
        </div>
        <div className="inner-content">
          <div className="inner">
            <div className="greeting">CEO GREETING</div>
            <div className="txt">
              <p>
                <span className="point-word">미래</span>는 새로운 환경속에서
                다양한 방법으로 건축작업을 해야하는 신개념 건축 프로젝트들의
                <br />
                전쟁터가 될 것입니다.
              </p>
              <p>
                몇세기 동안 발전해온 건축 기술들을 단시간 내에 응축하여 표현되는
                건물들로 가득차게 될
                <br />
                그곳에서 기간, 공간과 비용을 최소화하며 미적 감각까지 겸비한
                <span className="point-word"> S-src 공법</span>의 사용은 여러분
                <br />
                회사를 21세기 건축환경을 제어하고 이끌어 갈 수 있는 글로벌
                리더로 만들어 줄 것입니다.
              </p>
              <p>
                새로운 환경에서 더욱 빛을 발하는
                <span className="point-word"> Ko-P&C</span>만의 특허받은
                신기술로 여러분의 사업이
                <br />
                성공적으로 이루어 질 수 있도록 저희 전직원이 최선을 다하여
                지원할 것입니다.
              </p>
              <p>
                <span className="point-word">
                  "흐르는 물에는 이끼가 끼지 않는다"
                </span>
                는 명언처럼 과거의 경험만을 답습하지 않고 항상 새롭고
                <br />
                창조적인 생각을 해나가는 회사로 발전하겠습니다.
              </p>
              <p className="sign">Ko-P&C 대표이사 김충기 올림</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
