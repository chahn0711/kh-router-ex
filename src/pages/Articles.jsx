import { Link, Outlet } from "react-router-dom";
const Articles = () => {
  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to="/Articles/1">게시글1</Link>
        </li>
        <li>
          <Link to="/Articles/2">게시글2</Link>
        </li>
        <li>
          <Link to="/Articles/3">게시글3</Link>
        </li>
      </ul>
    </>
  );
};
export default Articles;
