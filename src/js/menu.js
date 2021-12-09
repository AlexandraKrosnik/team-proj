(() => {
  const mobileMenu = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const closeMobBtn = document.querySelector('[data-mobMenu-close]');
  const closeMenu = document.querySelector('[data-close]');
  const closeMenuTwo = document.querySelector('[data-close-two]');
  const closeMenuThree = document.querySelector('[data-close-three]');
  const closeMenuFour = document.querySelector('[data-close-four]');
  const closeMenuFive = document.querySelector('[data-close-five]');

  const toggleMenu = () => {
    if (document.documentElement.scrollWidth < 1280) {
      const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');

      const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMobBtn.addEventListener('click', toggleMenu);
  closeMenu.addEventListener('click', toggleMenu);
  closeMenuTwo.addEventListener('click', toggleMenu);
  closeMenuThree.addEventListener('click', toggleMenu);
  closeMenuFour.addEventListener('click', toggleMenu);
  closeMenuFive.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
