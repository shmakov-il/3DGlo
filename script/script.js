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
  countTimer('8 march 2021 20:52:10');

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
        target.value = target.value.replace(/[^+0-9]/g, '');
      });
    });
    const phoneNumberModal = document.querySelectorAll('[placeholder="Ваш номер телефона"]');
    phoneNumberModal.forEach(item => {
      item.addEventListener('input', event => {
        const target = event.target;
        target.value = target.value.replace(/[^+0-9]/g, '');
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
    const emailModal = document.querySelectorAll('[placeholder="Ваш E-mail"');
    emailModal.forEach(item => {
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

    const checkName = event => {
      const target = event.target;
      target.value = target.value.replace(/[^а-я-ё\-\s]/ig, '');
    };

    const checkMessage = event => {
      const target = event.target;
      target.value = target.value.replace(/[^а-я-ё\d\s.,!?:;]/ig, '');
    };

    yourName.forEach(item => {
      item.addEventListener('input', checkName);
      item.addEventListener('blur', event => {
        const target = event.target;
        target.value = target.value.replace(/ +/g, ' ').trim();
        target.value = target.value.replace(/([А-ЯЁ])/g, x => x.toLowerCase());
        target.value = target.value.replace(/(( |^)[а-яё])(?=[а-яё])/g, x => x.toUpperCase());
      });
    });
    yourMessage.forEach(item => {
      item.addEventListener('input', checkMessage);
      item.addEventListener('blur', event => {
        const target = event.target;
        target.value = target.value.replace(/^[ -]*|( |-)(?=\1)|[ -]*$/g, '').replace(/ +/g, ' ').trim();
      });
    });
  };
  validateNameAndMessage();

  // Проверка ввода +7 и 8 в номере телефона
  const formValidatorPhone = () => {
    const form = document.querySelectorAll('form');
    form.forEach(item => {
      item.querySelectorAll('input').forEach(item => {
        item.addEventListener('blur', event => {
          const target = event.target;
          if (target.placeholder === 'Номер телефона' || target.placeholder === 'Ваш номер телефона') {
            const checkNumber = reg => {
              const firstDigit = reg.substr(0, 1);
              let inputValue = target.value;
              if (inputValue.length < 11) {
                inputValue = '';
                return inputValue;
              } else {
                if (firstDigit === '+') {
                  inputValue = inputValue.substr(0, 12);
                  return inputValue;
                } else if (firstDigit === '7' || firstDigit === '8') {
                  inputValue = inputValue.substr(0, 11);
                  return inputValue;
                } else if (firstDigit !== '+' || firstDigit !== '7' || firstDigit !== '8') {
                  inputValue = '';
                  return inputValue;
                }
              }
            };
            const reg = target.value.replace(/[a-zа-яё/.,\-=_)({*&$%#@'"!~^:;?`<>№|\\})]/gi, '');
            const result = checkNumber(reg);
            target.value = result;
          }
        });
      });
    });
  };
  formValidatorPhone();

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

        const outNum = num => {
          const time = 1000,
            step = 0.1 * num;
          let count = 0;
          const timeInterval = Math.floor(time / (num / step));
          const interval = setInterval(() => {
            count += step;
            if (count === num) {
              clearInterval(interval);
            }
            calcTotal.textContent = count;
          }, timeInterval);
        };
        outNum(total);

      }
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

  // Отправка данных на сервер
  const sendForm = form => {
    const errorMessage = 'Что-то пошло не так...',
      loadMessage = 'Загрузка...',
      successMessage = 'Отправлено!',
      statusMessage = document.createElement('div');

    statusMessage.style.cssText = `font-size: 2rem; 
    color: white; 
    `;

    const postData = body => new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          resolve();
        } else {
          reject();
        }
      });
      request.open('POST', './server.php');
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(body));
    });

    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form),
      body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then(() => {
        form.reset();
        statusMessage.innerHTML = successMessage;
        setTimeout(() => {
          statusMessage.style.cssText = `
          display: none;
          `;
        }, 3000);
      })
      .catch(() => {
        statusMessage.innerHTML = errorMessage;
      });
  };

  document.body.addEventListener('submit', event => {
    event.preventDefault();
    sendForm(event.target);
  });
});
