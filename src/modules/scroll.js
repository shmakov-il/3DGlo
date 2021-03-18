const scroll = () => {
  const container = document.querySelector('#main-view');
  container.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target,
      targetMenuItem = target.closest('a');

    const position = element => {
      const rect = element.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        idElemY = rect.top + scrollTop;
      window.scrollTo({
        top: idElemY,
        behavior: 'smooth'
      });
    };

    if (targetMenuItem) {
      const blockId = targetMenuItem.getAttribute('href'),
        idElem = document.querySelector(blockId);
      position(idElem);
    }
  });
};

export default scroll;