// components/Footer.js

class Footer extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <footer>
    <div class="inner">

      <ul class="menu">
        <li><a href="javascript:void(0)" class="green">개인정보처리방침</a></li>
        <li><a href="javascript:void(0)">게임영상정보 운영관리 방침</a></li>
        <li><a href="javascript:void(0)">홈페이지 이용약관</a></li>
        <li><a href="javascript:void(0)">위치정보 이용약관</a></li>
        <li><a href="javascript:void(0)">NFT 이용약관</a></li>
        <li><a href="javascript:void(0)">윤리경영 핫라인</a></li>
      </ul>

      <div class="btn-group">
        <a href="javascript:void(0)" class="btn btn--white">찾아오시는 길</a>
        <a href="javascript:void(0)" class="btn btn--white">프로젝트협의</a>
        <a href="javascript:void(0)" class="btn btn--white">사이트 맵</a>
      </div>

      <div class="info">
        <span>사업자등록번호 000-00-00000</span>
        <span>CLOUDCOSMOS</span>
        <span>HP : 010 - 7777 - 3764 / mail : paranaidl@gmail.com</span>
        <span>기획/제작: 이 희 성</span>
      </div>

      <p class="copyright">
        &copy; <span class="this-year"></span> CLOUDCOSMOS Company. All Rights Reserved.
      </p>
      <img src="/images/CloudCosmos_logo.png" alt="클라우드코스모스" class="logo" />

      </div>
    </footer>
    `;
  }

  connectedCallback() {}
}

customElements.define('main-footer', Footer);

/*
올해가 몇 년도인지 계산
*/
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();