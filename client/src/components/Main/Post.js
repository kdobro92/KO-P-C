import { useRef, useState, useEffect } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { MdOutlineSubtitles } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Post({ id, image, title }) {
  console.log(id);
  let parsedImages = null;
  if (image) {
    parsedImages = image.split(",");
  }
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = parsedImages.length - 1;
  const slideRef = useRef(null);
  const imagePath = "http://localhost:4000/images/";

  const nextSlide = (e) => {
    e.stopPropagation();
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = (e) => {
    e.stopPropagation();
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const postClickHanlder = () => {
    navigate(`boards/${id}`);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className="slider-inner" onClick={postClickHanlder} aria-hidden="true">
      <div className={parsedImages.length < 2 && "hide-btn"}>
        <button className="slider-btn" type="button" onClick={nextSlide}>
          <IoIosArrowDropright className="prevBtn" />
        </button>
        <button className="slider-btn" type="button" onClick={prevSlide}>
          <IoIosArrowDropleft className="nextBtn" />
        </button>
      </div>
      <div className="slider-card" ref={slideRef}>
        {parsedImages.map((img) => {
          return (
            <img className="slider-img" src={imagePath + img} alt="profile" />
          );
        })}
      </div>
      <div className="slider-card-sub">
        <div className="card-sub-half1">
          <MdOutlineSubtitles className="card-sub-icon" />
        </div>
        <div className="card-sub-half2">{title}</div>
      </div>
    </div>
  );
}

export default Post;
