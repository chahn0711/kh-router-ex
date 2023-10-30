import { Navigate, useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const isLogin = true;

  if (isLogin) {
    return (
      <>
        <h1>마이페이지</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
        {/* <Link to="/">Home으로 이동</Link> */}
        <button onClick={() => navigate(-1)}>뒤로 가기</button>
      </>
    );
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
export default MyPage;
