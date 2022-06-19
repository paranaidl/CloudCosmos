// components/Header.js
// import setHeader from '../utils/header';

class Header extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `    
    <header>
      <div class="inner glow">
        <a href="/" class="logo">
          
          <img src="/images/CloudCosmos_logo.png" alt="CLOUDCOSMOS">
        </a>
        <div class="sub-menu">
          <ul class="menu">
            <li>
              <a href="/about/index.html">About</a>
            </li>
            <li>
              <a href="/game/index.html">Game</a>
            </li>
            <li>
              <a href="/login/index.html">Log In</a>
            </li>
            <li>
              <a href="/Signin/index.html">Sign In</a>
            </li>
          </ul>
          <div class="search">
            <input type="text">
            <div class="material-icons">search</div>
          </div>
        </div>
        <ul class="main-menu">
          <li class="item">
            <a href="/about/page/page1.html">
              <div class="item__name">CACOPHONIA</div>
              <div class="item__contents">The Lord of Idols</div>
            </a>
          </li>
          <li class="item">
            <a href="/about/page/page2.html">
              <div class="item__name">UNDERGROUND</div>
              <div class="item__contents">Rocker's Tomb</div>
            </a>
          </li>
          <li class="item">
            <a href="/about/page/page3.html">
              <div class="item__name">SOLARCRAFT</div>
              <div class="item__contents">AC chronicle</div>
            </a>
          </li>
          <li class="item">
            <a href="/about/page/page4.html">
              <div class="item__name">LITTLE-TRAVELER</div>
              <div class="item__contents">Baby tomcat's story</div>
            </a>
          </li>
          <li class="item">
            <a href="/about/page/page5.html">
              <div class="item__name">WATERWORLD</div>
              <div class="item__contents">Yellow submarine</div>
            </a>
          </li>
        </ul>
      </div>
    </header> `;
  }

  connectedCallback() {}
}

customElements.define('main-header', Header);

// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
    searchInputEl.focus()
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder', '통합검색')
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder', '')
});

/*
올해가 몇 년도인지 계산
*/
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();

