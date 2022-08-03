import { Link } from "react-scroll";

function Side() {
  return (
    <div>
      <Link to="1" spy smooth>
        <span>Day 1</span>
      </Link>
      <Link to="2" spy smooth>
        <span>Day 2</span>
      </Link>
      <Link to="3" spy smooth>
        <span>Day 3</span>
      </Link>
      <Link to="4" spy smooth>
        <span>Day 4</span>
      </Link>
    </div>
  );
}

export default Side;
