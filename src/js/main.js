// 클릭했을 때 show 가 토글되게 하는 함수

function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  });
}
function init() {
  const $navToggle = document.getElementById('nav-toggle');
  $navToggle.addEventListener('click', () => {
    // Menu Toggle
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));

  handleFloatingButton();
}

init();

// 뷰포트에 해당 페이지가 나오면 액팅을 하는 API

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      // entry.target.classList.add('bg-dark');
      document
        .querySelector(`.nav__link[href*=${sectionId}`)
        .classList.add('active-link');

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`
      );
      $items.forEach((el) => el.classList.remove('active-link'));
    }
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el));

// 스크롤 애니메이션
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});
scrollReveal.reveal('.work__link', {
  interval: 200,
});

const typeit = new TypeIt('#type-it', {
  speed: 80,
  startDelay: 1250,
  waitUntilVisible: true,
});

typeit
  .type('안녕하세요.<br/>')
  .type('<strong class="home__title-color">코딩하는 웹 디자이너</strong><br />')
  .type('<strong class="home__title-color">황은애</strong> 입니다.')
  .go();
