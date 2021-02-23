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
  };
  countTimer('25 february 2021 13:47:00');


  // Menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      btnCloseMenu = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul > li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    btnCloseMenu.addEventListener('click', handlerMenu);
    menuItems.forEach(item => item.addEventListener('click', handlerMenu));
  };
  toggleMenu();



  // PopUp
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      btnPopup = document.querySelectorAll('.popup-btn'),
      btnPopupClose = document.querySelector('.popup-close');

    btnPopup.forEach(item => {
      item.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });

    btnPopupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });





  };
  togglePopUp();




});


