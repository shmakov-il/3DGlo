const togglePopUp = () => {
  const popUp = document.querySelector('.popup'),
    popUpContent = document.querySelector('.popup-content'),
    service = document.querySelector('.service'),
    popUpBtn = document.querySelectorAll('.popup-btn');
  const openPopUp = () => {
    let count = 0;
    const height = document.documentElement.offsetHeight / 50;
    let openPopUpAnimation;
    const openPopUp = () => {
      openPopUpAnimation = requestAnimationFrame(openPopUp);
      count += 5;
      if ((count - 5) < height) {
        popUpContent.style.top = count + 'px';
      } else if (count === height) {
        cancelAnimationFrame(openPopUp);
      }
    };
    openPopUpAnimation = requestAnimationFrame(openPopUp);
  };
  service.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('popup-btn')) {
      popUpBtn.forEach(item => {
        if (item === target && window.innerWidth < 768) {
          popUp.style.display = 'block';
        } else if ((item === target && window.innerWidth >= 768)) {
          popUp.style.display = 'block';
          openPopUp();
        }
      });
    }
  });
  popUp.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popUp.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popUp.style.display = 'none';
      }
    }
  });
};

export default togglePopUp;