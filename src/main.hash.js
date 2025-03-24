import { initPageHandlers } from "./pageHandlers";
import { MainPage, ProfilePage, LoginPage, ErrorPage } from "./pages";
import { getUserData } from "./utils/auth";

// 해시 라우터 구현
export const hashRouter = () => {
  // 해시 값을 가져오거나 기본 경로 사용
  // #/ 형태에서 # 이후의 경로만 추출
  const hashPath = window.location.hash.slice(1) || "/";

  let page = "";

  if (hashPath === "/") {
    page = MainPage();
  } else if (hashPath === "/profile") {
    page = ProfilePage({ user: getUserData() });
  } else if (hashPath === "/login") {
    page = LoginPage();
  } else {
    page = ErrorPage();
  }

  document.getElementById("root").innerHTML = page;

  // 페이지 핸들러 초기화 (이벤트 리스너 등)
  initPageHandlers(hashPath);
};

// 페이지 이동 함수 (다른 파일에서 사용 가능)
export const navigateToHash = (path) => {
  window.location.hash = path;
};

// 초기 로드 시 라우터 실행
window.addEventListener("load", hashRouter);

// 해시 변경 이벤트 리스너 추가
window.addEventListener("hashchange", hashRouter);
