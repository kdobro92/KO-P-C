import { MdOutlineDescription } from "react-icons/md";
import { TiUser } from "react-icons/ti";

function Content({ post }) {
  return (
    <div className="content-container">
      <div className="content-sub-container">
        <div className="left-container">
          <div className="desc-container">
            <div className="desc-icon">
              <MdOutlineDescription />
            </div>
            <div className="content-description">{post}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
