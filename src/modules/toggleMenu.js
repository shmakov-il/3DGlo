const toggleMenu = () => {
  const menu = document.querySelector('menu');
  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };
  const eventListenerAnimation = () => {
    document.addEventListener('click', event => {
      const target = event.target,
        targetMenu = target.closest('.menu'),
        targetCloseBtn = target.closest('.close-btn'),
        targetMenuItem = target.closest('ul>li>a');
      if (targetMenu !== null && window.innerWidth < 768) {
        menu.style.transform = 'translateX(100%)';
      } else if (targetCloseBtn !== null && window.innerWidth < 768) {
        menu.style.transform = 'translateX(-100%)';
      } else if (targetMenuItem !== null && window.innerWidth < 768) {
        menu.style.transform = 'translateX(-100%)';
      }
    });
  };
  eventListenerAnimation();
  const eventListener = () => {
    document.addEventListener('click', event => {
      const target = event.target,
        targetMenu = target.closest('.menu'),
        targetCloseBtn = target.closest('.close-btn'),
        targetMenuItem = target.closest('ul>li>a');
      if (targetMenu !== null && window.innerWidth >= 768) {
        menu.removeAttribute('style');
        handlerMenu();
      } else if ((targetCloseBtn !== null || targetMenuItem !== null) && window.innerWidth >= 768) {
        handlerMenu();
      }
    });
  };
  eventListener();
};

export default toggleMenu;