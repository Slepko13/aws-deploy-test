import { Link } from "react-router-dom";

export default function Navigation({ left, right }) {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to={left.path}>{left.title}</Link> |{" "}
      <Link to={right.path}>{right.title}</Link>
    </nav>
  );
}
