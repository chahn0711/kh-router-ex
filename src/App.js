import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import MyPage from "./pages/MyPage";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MyPage와 Setting 페이지 추가 해보기
// Home 에서 About, MyPage, Setting 페이지 링크 보여주고 이동 하도록
// 이동된 각 페이지에서는 홈으로 이동하는 링크를 만들고 Home 이동 되도록 만들기

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 아무것도 안치면 home */}
        <Route element={<Layout />}>
          <Route path="/About" element={<About />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Profiles/:username" element={<Profile />} />
          <Route path="/articles" element={<Articles />}>
            <Route path="/articles/:id" element={<Article />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
