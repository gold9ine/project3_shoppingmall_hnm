import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./routes/PrivateRoute";

// 유저는 메뉴와 상품들을 볼 수 있다.
// 유저는 로그인을 할 수 있다.
// 유저는 상품디테일을 보기 위해 로그인을 해야한다.
// 로그인한 유저는 상품디테일정보를 볼 수 있다.
// 유저는 상품을 검색할 수 있다.
// 유저는 로그아웃할 수 있다.
// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션 바
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 3-1. 상품디테일을 눌렀으나, 로그인이 안되어 있을 경우 로그인 페이지가 먼저 나온다
// 4. 로그인이 되어있을 경우, 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 누르면 로그아웃이 된다.
// 5-1. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  let [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          // 방법 0 _ 로그인 상관 없이 이동
          // element={<ProductDetail />
          // 방법 1 _ 로그인 인증 (Login 컴포넌트 바로 호출)
          // element={<PrivateRoute authenticate={authenticate} setAuthenticate={setAuthenticate}/>}
          // 방법 2 _ 로그인 인증 (Navigate 사용)
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
