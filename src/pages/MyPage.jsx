import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <h1>마이페이지</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      <Link to="/">Home으로 이동</Link>
    </>
  );
};
export default MyPage;
