(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}})();const b=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>
`,h=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,x=({isLoggedIn:t})=>`
  <nav id="nav" class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="/" class="text-blue-600 font-bold">홈</a></li>
      ${t?`
          <li><a href="/profile" class="text-gray-600">프로필</a></li>
          <li><a href="/login" id="logout" class="text-gray-600">로그아웃</a></li>`:'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
    </ul>
  </nav>
`,v=t=>{const{profileImage:e,author:l,timeAgo:n,content:o,id:a}=t;return`
    <div class="bg-white rounded-lg shadow p-4" data-post-id="${a||""}">
        <div class="flex items-center mb-2">
          <img src="${e}" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">${l}</p>
            <p class="text-sm text-gray-500">${n}</p>
          </div>
        </div>
        <p>${o}</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button class="post-action" data-action="like" data-post-id="${a||""}">좋아요</button>
          <button class="post-action" data-action="comment" data-post-id="${a||""}">댓글</button>
          <button class="post-action" data-action="share" data-post-id="${a||""}">공유</button>
        </div>
    </div>
  `},p=({content:t,isLoggedIn:e})=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${b()}
        ${x({isLoggedIn:e})}
        <main class="p-4">
          ${t}
        </main>
        ${h()}
      </div>
    </div>
`,f=({label:t,id:e,value:l,type:n="text"})=>`
  <div class="mb-4">
    <label for="${e}" class="block text-gray-700 text-sm font-bold mb-2">${t}</label>
    <input type="${n}" id="${e}" name="${e}" value="${l}" class="w-full p-2 border rounded" />
  </div>
`,y=({label:t,id:e,value:l})=>`
  <div class="mb-4">
    <label for="${e}" class="block text-gray-700 text-sm font-bold mb-2">${t}</label>
    <textarea id="${e}" name="${e}" class="w-full p-2 border rounded">${l}</textarea>
  </div>
`,w=[{id:1,author:"홍길동",profileImage:"https://placehold.co/40",timeAgo:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,author:"김철수",profileImage:"https://placehold.co/40",timeAgo:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,author:"이영희",profileImage:"https://placehold.co/40",timeAgo:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,author:"박민수",profileImage:"https://placehold.co/40",timeAgo:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,author:"정수연",profileImage:"https://placehold.co/40",timeAgo:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],i="user",r={isLoggedIn(t){return localStorage.getItem(t)!==null},getUserData(t){return JSON.parse(localStorage.getItem(t)||"null")},logout(t){localStorage.removeItem(t)},setUserData(t,e){localStorage.setItem(t,JSON.stringify(e))}},I=()=>{const t=`
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
    </div>

    <div class="space-y-4">
      ${w.map(e=>v(e)).join("")}
    </div>
  `;return p({content:t,isLoggedIn:r.isLoggedIn(i)})},L=({user:t})=>{const e=`
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
        내 프로필
      </h2>
      <form id="profile-form">
        ${f({label:"사용자 이름",id:"username",value:t==null?void 0:t.username})}
        ${f({label:"이메일",id:"email",value:t==null?void 0:t.email,type:"email"})}
        ${y({label:"자기소개",id:"bio",value:`${t==null?void 0:t.bio} ${t==null?void 0:t.bio}`})}
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded font-bold"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  `;return p({content:e,isLoggedIn:r.isLoggedIn(i)})},$=()=>`
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
`,E=()=>`
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
`,m="/front_5th_chapter1-1",c=window.location.hash!=="",s={MAIN:"/",PROFILE:"/profile",LOGIN:"/login"},d=()=>{const e=window.location.hash!==""?window.location.hash.slice(1).replace(m,""):window.location.pathname.replace(m,"");P(e),A(e)},P=t=>{let e="";t===s.MAIN?e=I():t===s.PROFILE?e=L({user:r.getUserData(i)}):t===s.LOGIN?e=$():e=E(),document.getElementById("root").innerHTML=e},A=t=>{t===s.LOGIN?O():t===s.PROFILE&&N(),S()},u=(t,e)=>{t?window.location.hash=e:window.history.pushState({},"",`${m}${e}`)},O=()=>{if(r.isLoggedIn(i))u(c,s.MAIN),d();else{const t=document.getElementById("login-form");t&&t.addEventListener("submit",B)}},N=()=>{if(!r.isLoggedIn(i))u(c,s.LOGIN),d();else{const t=document.getElementById("profile-form");t&&t.addEventListener("submit",D)}},S=()=>{const t=document.getElementById("logout");t&&t.addEventListener("click",F)},D=t=>{t.preventDefault();const e=document.getElementById("username").value,l=document.getElementById("email").value,n=document.getElementById("bio").value.trim(),o={username:e,email:l,bio:n};r.setUserData(i,o),u(c,s.PROFILE),d()},B=t=>{t.preventDefault();const e={username:"testuser",email:"",bio:""};r.setUserData(i,e),u(c,s.MAIN),d()},F=t=>{t.preventDefault(),r.logout(i),u(c,s.LOGIN),d()};document.addEventListener("click",t=>{if(t.target.tagName==="A"&&t.target.id!=="logout"){t.preventDefault();const e=t.target.getAttribute("href");window.history.pushState({},"",`${m}${e}`),d()}});window.addEventListener("load",d);window.addEventListener("popstate",d);
