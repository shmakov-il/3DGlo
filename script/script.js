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
      return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
      const timer = getTimeRemaining();
      if (timer.timeRemaining > 0) {
        setInterval(updateClock, 1000);
        if (timer.hours < 10) {
          timerHours.textContent = '0' + timer.hours;
        } else {
          timerHours.textContent = timer.hours;
        }
        if (timer.minutes < 10) {
          timerMinutes.textContent = '0' + timer.minutes;
        } else {
          timerMinutes.textContent = timer.minutes;
        }
        if (timer.seconds < 10) {
          timerSeconds.textContent = '0' + timer.seconds;
        } else {
          timerSeconds.textContent = timer.seconds;
        }
      } else {
        clearInterval(updateClock);
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
    };
    updateClock();
  };
  countTimer('24 february 2021 13:47:00');


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


