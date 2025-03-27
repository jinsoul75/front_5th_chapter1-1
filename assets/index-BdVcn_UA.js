(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();const f=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>
`,p=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,b=({isLoggedIn:e})=>`
  <nav id="nav" class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="/" class="text-blue-600 font-bold">홈</a></li>
      ${e?`
          <li><a href="/profile" class="text-gray-600">프로필</a></li>
          <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>`:'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
    </ul>
  </nav>
`,h=e=>{const{profileImage:t,author:a,timeAgo:s,content:o,id:l}=e;return`
    <div class="bg-white rounded-lg shadow p-4" data-post-id="${l||""}">
        <div class="flex items-center mb-2">
          <img src="${t}" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">${a}</p>
            <p class="text-sm text-gray-500">${s}</p>
          </div>
        </div>
        <p>${o}</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button class="post-action" data-action="like" data-post-id="${l||""}">좋아요</button>
          <button class="post-action" data-action="comment" data-post-id="${l||""}">댓글</button>
          <button class="post-action" data-action="share" data-post-id="${l||""}">공유</button>
        </div>
    </div>
  `},m=({content:e,isLoggedIn:t})=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${f()}
        ${b({isLoggedIn:t})}
        <main class="p-4">
          ${e}
        </main>
        ${p()}
      </div>
    </div>
`,u=({label:e,id:t,value:a,type:s="text"})=>`
  <div class="mb-4">
    <label for="${t}" class="block text-gray-700 text-sm font-bold mb-2">${e}</label>
    <input type="${s}" id="${t}" name="${t}" value="${a}" class="w-full p-2 border rounded" />
  </div>
`,x=({label:e,id:t,value:a})=>`
  <div class="mb-4">
    <label for="${t}" class="block text-gray-700 text-sm font-bold mb-2">${e}</label>
    <textarea id="${t}" name="${t}" class="w-full p-2 border rounded">${a}</textarea>
  </div>
`,v=[{id:1,author:"홍길동",profileImage:"https://placehold.co/40",timeAgo:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,author:"김철수",profileImage:"https://placehold.co/40",timeAgo:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,author:"이영희",profileImage:"https://placehold.co/40",timeAgo:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,author:"박민수",profileImage:"https://placehold.co/40",timeAgo:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,author:"정수연",profileImage:"https://placehold.co/40",timeAgo:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],g=()=>localStorage.getItem("user")!==null,w=()=>JSON.parse(localStorage.getItem("user")||"null"),y=()=>{const e=`
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
    </div>

    <div class="space-y-4">
      ${v.map(t=>h(t)).join("")}
    </div>
  `;return m({content:e,isLoggedIn:g()})},$=({user:e})=>{const t=`
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
        내 프로필
      </h2>
      <form id="profile-form">
        ${u({label:"사용자 이름",id:"username",value:e==null?void 0:e.username})}
        ${u({label:"이메일",id:"email",value:e==null?void 0:e.email,type:"email"})}
        ${x({label:"자기소개",id:"bio",value:`${e==null?void 0:e.bio} ${e==null?void 0:e.bio}`})}
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded font-bold"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  `;return m({content:t,isLoggedIn:g()})},I=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input type="text" id="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" id="loginPassword" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,L=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,i="/front_5th_chapter1-1",r=window.location.hash!=="",n=()=>{const e=window.location.hash!=="",t=e?window.location.hash.slice(1).replace(i,""):window.location.pathname.replace(i,"");console.log(" window.location.hash",window.location.hash),console.log("isHash",e),console.log("render",t);let a="";t==="/"?a=y():t==="/profile"?a=$({user:w()}):t==="/login"?a=I():a=L(),document.getElementById("root").innerHTML=a,t==="/login"?E():t==="/profile"?S():P()},c=(e,t)=>{console.log("navigateTo",i,t),e?window.location.hash=t:window.history.pushState({},"",`${i}${t}`)},E=()=>{if(localStorage.getItem("user")!==null)c(r,"/"),n();else{const e=document.getElementById("login-form");e&&e.addEventListener("submit",B)}},S=()=>{if(localStorage.getItem("user")===null)c(r,"/login"),n();else{const e=document.getElementById("profile-form");e&&e.addEventListener("submit",A)}},P=()=>{const e=document.getElementById("logout");e&&e.addEventListener("click",O)},A=e=>{e.preventDefault();const t=document.getElementById("username").value,a=document.getElementById("email").value,s=document.getElementById("bio").value.trim(),o={username:t,email:a,bio:s};localStorage.setItem("user",JSON.stringify(o)),c(r,"/profile"),n()},B=e=>{e.preventDefault();const t={username:"testuser",email:"",bio:""};localStorage.setItem("user",JSON.stringify(t)),c(r,"/"),n()},O=e=>{console.log("로그아웃 클릭"),e.preventDefault(),localStorage.removeItem("user"),c(r,"/login"),n()};document.addEventListener("click",e=>{if(e.target.tagName==="A"&&e.target.id!=="logout"){console.log("A 태그 클릭"),e.preventDefault();const t=e.target.getAttribute("href");window.history.pushState({},"",`${i}${t}`),n()}});window.addEventListener("load",n);window.addEventListener("popstate",n);
