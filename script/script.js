window.addEventListener('DOMContentLoaded', () => {
  'use strict';
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
    let updateClockAnimation;
    const updateClock = () => {
      updateClockAnimation = requestAnimationFrame(updateClock);
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
    updateClockAnimation = requestAnimationFrame(updateClock);
  };
  countTimer('29 february 2021 20:52:10');

  // Menu
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
  toggleMenu();

  // PopUp
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
  togglePopUp();

  // Tabs
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = document.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = index => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('hidden');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('hidden');
        }
      }
    };

    tabHeader.addEventListener('click', event => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target.classList.contains('service-header-tab')) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();

  // Слайдер
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      slider = document.querySelector('.portfolio-content');

    slide.forEach(() => {
      const liPoint = document.createElement('li');
      liPoint.setAttribute('class', 'dot');
      document.querySelector('.portfolio-dots').appendChild(liPoint);
    });

    let currentSlide = 0,
      interval;

    const dot = document.querySelectorAll('.dot');
    if (currentSlide === 0) {
      dot[0].setAttribute('class', 'dot dot-active');
    }
    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };
    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };
    slider.addEventListener('click', event => {
      event.preventDefault();
      const target = event.target;
      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });
    slider.addEventListener('mouseout', event => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });
    startSlide();
  };
  slider();

  // Наша команда
  const changeImage = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach(item => {
      item.addEventListener('mouseover', event => {
        const target = event.target;
        [target.src, target.dataset.img] = [target.dataset.img, target.src];
      });
    });

    commandPhoto.forEach(item => {
      item.addEventListener('mouseout', event => {
        const target = event.target;
        [target.dataset.img, target.src] = [target.src, target.dataset.img];
      });
    });
  };
  changeImage();

  // Калькулятор (ввод только цифр)
  const validateCalculator = () => {
    const calcBlock = document.querySelector('.calc-block');

    calcBlock.addEventListener('input', event => {
      const target = event.target;
      if (target.matches('[type="text"]')) {
        target.value = target.value.replace(/\D/g, '');
      }
    });
  };
  validateCalculator();

  // Проверка номера телефона
  const validateNumberPhone = () => {
    const phoneNumber = document.querySelectorAll('[placeholder="Номер телефона"]');
    phoneNumber.forEach(item => {
      item.addEventListener('input', event => {
        const target = event.target;
        target.value = target.value.replace(/[^\-()\d]/g, '');
      });
    });
  };
  validateNumberPhone();

  // Проверка email
  const validateEmail = () => {
    const email = document.querySelectorAll('[placeholder="E-mail"');
    email.forEach(item => {
      item.addEventListener('input', event => {
        const target = event.target;
        target.value = target.value.replace(/[^a-z@\-_.!~*']/ig, '');
      });
    });
  };
  validateEmail();

  // Проверка имени и сообщения
  const validateNameAndMessage = () => {
    const yourName = document.querySelectorAll('[placeholder="Ваше имя"]'),
      yourMessage = document.querySelectorAll('[placeholder="Ваше сообщение"]');

    const check = event => {
      const target = event.target;
      target.value = target.value.replace(/[^а-я-ё\-\s]/ig, '');
    };

    yourName.forEach(item => {
      item.addEventListener('input', check);
      item.addEventListener('blur', event => {
        const target = event.target;
        target.value = target.value.replace(/ +/g, ' ').trim();
        target.value = target.value.replace(/([А-ЯЁ])/g, x => x.toLowerCase());
        target.value = target.value.replace(/(( |^)[а-яё])(?=[а-яё])/g, x => x.toUpperCase());
      });
    });
    yourMessage.forEach(item => {
      item.addEventListener('input', check);
      item.addEventListener('blur', event => {
        const target = event.target;
        target.value = target.value.replace(/^[ -]*|( |-)(?=\1)|[ -]*$/g, '').replace(/ +/g, ' ').trim();
      });
    });
  };
  validateNameAndMessage();


  // Калькулятор

  const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcCount = document.querySelector('.calc-count'),
      calcDay = document.querySelector('.calc-day'),
      calcTotal = document.getElementById('total');

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;

      const typeValue = +calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      calcTotal.textContent = total;
    };

    calcBlock.addEventListener('change', event => {
      const target = event.target;
      if (target.matches('.calc-type') ||
        target.matches('.calc-square') ||
        target.matches('.calc-count') ||
        target.matches('.calc-day')) {
        countSum();
      }
    });
  };
  calc();

});
