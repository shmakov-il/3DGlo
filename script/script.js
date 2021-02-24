window.addEventListener('DOMContentLoaded', () => {

  // Timer
  const countTimer = deadline => {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
      const addZero = number => {
        if (number < 10) {
          number = '0' + number;
          return number;
        } else {
          return number;
        }
      };
      return {
        timeRemaining,
        hours: addZero(hours),
        minutes: addZero(minutes),
        seconds: addZero(seconds)
      };
    };
    const updateClock = () => {
      const timer = getTimeRemaining();
      if (timer.timeRemaining > 0) {
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
      }
      if (timer.timeRemaining <= 0) {
        clearInterval(updateClock);
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
    };
    setInterval(updateClock, 1000);
    updateClock();
  };
  countTimer('24 february 2021 20:52:10');

  // Menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      btnCloseMenu = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul > li');
    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };
    const width = document.documentElement.offsetWidth;
    if (width < 768) {
      btnMenu.addEventListener('click', () => {
        menu.style.transform = 'translateX(100%)';
      });
      btnCloseMenu.addEventListener('click', () => {
        menu.style.transform = 'translateX(-100%)';
      });
      menuItems.forEach(elem => elem.addEventListener('click', () => {
        menu.style.transform = 'translateX(-100%)';
      }));
    } else {
      btnMenu.addEventListener('click', handlerMenu);
      btnCloseMenu.addEventListener('click', handlerMenu);
      menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
    }
  };
  toggleMenu();

  // PopUp
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
      popUpContent = document.querySelector('.popup-content'),
      popUpBtn = document.querySelectorAll('.popup-btn'),
      closePopUpBtn = document.querySelector('.popup-close');
    const openPopUp = () => {
      let count = 0;
      const height = document.documentElement.offsetHeight / 50;
      const openPopUp = setInterval(() => {
        count += 5;
        if ((count - 5) < height) {
          popUpContent.style.top = count + 'px';
        } else if (count === height) {
          clearInterval(openPopUp);
        }
      }, 20);
    };
    const closePopUp = () => {
      let count = 0;
      const height = document.documentElement.offsetHeight / 50;
      const closePopUp = setInterval(() => {
        count += 5;
        if ((count - 5) < height) {
          const top = height - count;
          popUpContent.style.top = top + 'px';
        } else if (count === height) {
          clearInterval(closePopUp);
        }
      }, 20);
    };
    const width = document.documentElement.offsetWidth;
    if (width < 768) {
      popUpBtn.forEach(item => {
        item.addEventListener('click', () => {
          popUp.style.display = 'block';
        });
      });
      closePopUpBtn.addEventListener('click', () => {
        popUp.style.display = 'none';
      });
      popUp.addEventListener('click', () => {
        popUp.style.display = 'none';
      });
    } else {
      popUpBtn.forEach(item => {
        item.addEventListener('click', () => {
          popUp.style.display = 'block';
          openPopUp();
        });
      });
      closePopUpBtn.addEventListener('click', () => {
        popUp.style.display = 'none';
        closePopUp();
      });
      popUp.addEventListener('click', () => {
        popUp.style.display = 'none';
        closePopUp();
      });
    }
  };
  togglePopUp();




});


