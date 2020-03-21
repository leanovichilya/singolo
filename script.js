window.onload = function () {
  const ANCHORS = document.querySelectorAll('a[href^="#home"]');
  const MENU = document.querySelector('.nav__list');
  const PHONE_BACKGROUND_SHOWHIDE = document.querySelectorAll('.phone__wrapper>div>div>div');

  console.dir(ANCHORS);

  ANCHORS.forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();

      const blockID = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  MENU.addEventListener('click', function (event) {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('nav__link-active'));
    if (event.target.tagName === 'A') {
      event.target.classList.add('nav__link-active');
    }
  });

  function showHideBackground(event) {
    if (event.target.style.backgroundImage === 'none') {
      event.target.style.backgroundImage = '';
    } else {
      event.target.style.backgroundImage = 'none';
    }
  }

  PHONE_BACKGROUND_SHOWHIDE.forEach((el) => {
    el.addEventListener('click', showHideBackground);
  });
};

