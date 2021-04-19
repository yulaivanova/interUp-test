/*  eslint no-var: "error"  */
/*  eslint-env es6  */

'use strict';
(function () {

  const ESC_KEY = 'Escape';
  const NAV_MAIN = document.querySelector('.site-nav');
  const NAV_TOGGLE = document.querySelector('.site-nav__toggle');
  const HEADER = document.querySelector('.header');

  NAV_MAIN.classList.remove('site-nav--nojs');
  HEADER.classList.remove('header--nojs');
  closeMenu();

  function closeMenu() {
    NAV_MAIN.classList.add('site-nav--closed');
    NAV_MAIN.classList.remove('site-nav--opened');
    HEADER.classList.remove('header--opened');
  }

  function openMenu() {
    NAV_MAIN.classList.remove('site-nav--closed');
    NAV_MAIN.classList.add('site-nav--opened');
    HEADER.classList.add('header--opened');

    document.addEventListener('keydown', onEscPress);
  }

  const onEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      closeMenu();
    }
  };

  const onOverlayClick = function (event) {
    const target = event.target;
    if (target.classList.contains('header') || target.classList.contains('header--opened')) {
      closeMenu();
      document.removeEventListener('keydown', onEscPress);
    }
  };

  NAV_TOGGLE.addEventListener('click', function () {
    if (NAV_MAIN.classList.contains('site-nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  HEADER.addEventListener('click', onOverlayClick);

})();
