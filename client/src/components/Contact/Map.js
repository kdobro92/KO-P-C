import { useEffect } from "react";
import React from "react";

const { kakao } = window;
function Map({ post }) {
  useEffect(() => {
    const container = document.querySelector(".map");
    const options = {
      center: new kakao.maps.LatLng(37.5574729, 126.918349),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(37.557472, 126.918349);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    const iwContent = `<div style="font-size: 13px; width:200px; text-align:center; padding: 10px;">서울 마포구 서교동 449-14<a href="https://map.kakao.com/link/map/서울 마포구 서교동 449-14, 37.557472, 126.918349" style="color:blue" target="_blank"><br>큰지도보기</a><a href="https://map.kakao.com/link/to/" style="color:blue" target="_blank"> 길찾기</a></div>`;
    const iwPosition = new kakao.maps.LatLng(37.557472, 126.918349);
    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    const mapTypeControl = new kakao.maps.MapTypeControl();
    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <div className="map-container">
      <div className="map-sub-container">
        <div className="map" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
}

export default Map;
