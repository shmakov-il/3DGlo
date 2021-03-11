/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changeImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changeImage */ \"./src/modules/changeImage.js\");\n/* harmony import */ var _modules_validateCalculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validateCalculator */ \"./src/modules/validateCalculator.js\");\n/* harmony import */ var _modules_validateNumberPhone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validateNumberPhone */ \"./src/modules/validateNumberPhone.js\");\n/* harmony import */ var _modules_validateEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/validateEmail */ \"./src/modules/validateEmail.js\");\n/* harmony import */ var _modules_validateNameAndMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/validateNameAndMessage */ \"./src/modules/validateNameAndMessage.js\");\n/* harmony import */ var _modules_formValidatorPhone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/formValidatorPhone */ \"./src/modules/formValidatorPhone.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('29 march 2021 20:52:10'); // Menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); // PopUp\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)(); // Tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); // Наша команда\n\n(0,_modules_changeImage__WEBPACK_IMPORTED_MODULE_5__.default)(); // Калькулятор (ввод только цифр)\n\n(0,_modules_validateCalculator__WEBPACK_IMPORTED_MODULE_6__.default)(); // Проверка номера телефона\n\n(0,_modules_validateNumberPhone__WEBPACK_IMPORTED_MODULE_7__.default)(); // Проверка email\n\n(0,_modules_validateEmail__WEBPACK_IMPORTED_MODULE_8__.default)(); // Проверка имени и сообщения\n\n(0,_modules_validateNameAndMessage__WEBPACK_IMPORTED_MODULE_9__.default)(); // Проверка ввода +7 и 8 в номере телефона\n\n(0,_modules_formValidatorPhone__WEBPACK_IMPORTED_MODULE_10__.default)(); // Калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_11__.default)(); // Отправка данных на сервер\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_12__.default)();\n\n//# sourceURL=webpack://newproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcCount = document.querySelector('.calc-count'),\n      calcDay = document.querySelector('.calc-day'),\n      calcTotal = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = +calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n\n      var outNum = function outNum(num) {\n        var time = 1000,\n            step = 0.1 * num;\n        var count = 0;\n        var timeInterval = Math.floor(time / (num / step));\n        var interval = setInterval(function () {\n          count += step;\n\n          if (count === num) {\n            clearInterval(interval);\n          }\n\n          calcTotal.textContent = count;\n        }, timeInterval);\n      };\n\n      outNum(total);\n    }\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-count') || target.matches('.calc-day')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://newproject/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/changeImage.js":
/*!************************************!*\
  !*** ./src/modules/changeImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changeImage = function changeImage() {\n  var commandPhoto = document.querySelectorAll('.command__photo');\n  commandPhoto.forEach(function (item) {\n    item.addEventListener('mouseover', function (event) {\n      var target = event.target;\n      var _ref = [target.dataset.img, target.src];\n      target.src = _ref[0];\n      target.dataset.img = _ref[1];\n    });\n  });\n  commandPhoto.forEach(function (item) {\n    item.addEventListener('mouseout', function (event) {\n      var target = event.target;\n      var _ref2 = [target.src, target.dataset.img];\n      target.dataset.img = _ref2[0];\n      target.src = _ref2[1];\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeImage);\n\n//# sourceURL=webpack://newproject/./src/modules/changeImage.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.getElementById('timer-hours'),\n      timerMinutes = document.getElementById('timer-minutes'),\n      timerSeconds = document.getElementById('timer-seconds');\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n\n    var addZero = function addZero(number) {\n      if (number < 10) {\n        number = '0' + number;\n        return number;\n      } else {\n        return number;\n      }\n    };\n\n    return {\n      timeRemaining: timeRemaining,\n      hours: addZero(hours),\n      minutes: addZero(minutes),\n      seconds: addZero(seconds)\n    };\n  };\n\n  var updateClockAnimation;\n\n  var updateClock = function updateClock() {\n    updateClockAnimation = requestAnimationFrame(updateClock);\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      timerHours.textContent = timer.hours;\n      timerMinutes.textContent = timer.minutes;\n      timerSeconds.textContent = timer.seconds;\n    }\n\n    if (timer.timeRemaining <= 0) {\n      clearInterval(updateClock);\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  };\n\n  updateClockAnimation = requestAnimationFrame(updateClock);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://newproject/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/formValidatorPhone.js":
/*!*******************************************!*\
  !*** ./src/modules/formValidatorPhone.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar formValidatorPhone = function formValidatorPhone() {\n  var form = document.querySelectorAll('form');\n  form.forEach(function (item) {\n    item.querySelectorAll('input').forEach(function (item) {\n      item.addEventListener('blur', function (event) {\n        var target = event.target;\n\n        if (target.placeholder === 'Номер телефона' || target.placeholder === 'Ваш номер телефона') {\n          var checkNumber = function checkNumber(reg) {\n            var firstDigit = reg.substr(0, 1);\n            var inputValue = target.value;\n            var result = inputValue.replace(/[a-zа-яё/.,\\-=_)({*&$%#@'\"!~^:;?`<>№|\\\\})]/gi, '');\n            inputValue = result;\n\n            if (inputValue.length < 11) {\n              inputValue = '';\n              return inputValue;\n            } else {\n              if (firstDigit === '+') {\n                if (inputValue.substr(1).includes('+')) {\n                  inputValue = '';\n                  return inputValue;\n                } else if (inputValue[1] !== '7') {\n                  inputValue = '';\n                  return inputValue;\n                } else {\n                  inputValue = inputValue.substr(0, 12);\n                  return inputValue;\n                }\n              } else if (firstDigit === '7' || firstDigit === '8') {\n                if (inputValue.substr(1).includes('+')) {\n                  inputValue = '';\n                  return inputValue;\n                } else {\n                  inputValue = inputValue.substr(0, 11);\n                  return inputValue;\n                }\n              } else if (firstDigit !== '+' || firstDigit !== '7' || firstDigit !== '8') {\n                inputValue = '';\n                return inputValue;\n              }\n            }\n          };\n\n          var reg = target.value.replace(/[a-zа-яё/.,\\-=_)({*&$%#@'\"!~^:;?`<>№|\\\\})]/gi, '');\n          var result = checkNumber(reg);\n          target.value = result;\n        }\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidatorPhone);\n\n//# sourceURL=webpack://newproject/./src/modules/formValidatorPhone.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(form) {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Отправлено!',\n      statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"font-size: 2rem; \\n  color: white; \\n  \";\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  form.appendChild(statusMessage);\n  statusMessage.textContent = loadMessage;\n  var formData = new FormData(form),\n      body = {};\n  formData.forEach(function (val, key) {\n    body[key] = val;\n  });\n  postData(body).then(function (response) {\n    if (response.status !== 200) {\n      throw new Error('status network not 200');\n    }\n\n    form.reset();\n    statusMessage.innerHTML = successMessage;\n    setTimeout(function () {\n      statusMessage.parentNode.removeChild(statusMessage);\n    }, 5000);\n  })[\"catch\"](function (error) {\n    statusMessage.innerHTML = errorMessage;\n    console.error(error);\n  });\n};\n\nvar activateSendForm = function activateSendForm() {\n  document.body.addEventListener('submit', function (event) {\n    event.preventDefault();\n    sendForm(event.target);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateSendForm);\n\n//# sourceURL=webpack://newproject/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      slider = document.querySelector('.portfolio-content');\n  slide.forEach(function () {\n    var liPoint = document.createElement('li');\n    liPoint.setAttribute('class', 'dot');\n    document.querySelector('.portfolio-dots').appendChild(liPoint);\n  });\n  var currentSlide = 0,\n      interval;\n  var dot = document.querySelectorAll('.dot');\n\n  if (currentSlide === 0) {\n    dot[0].setAttribute('class', 'dot dot-active');\n  }\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://newproject/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = document.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('hidden');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('hidden');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target.classList.contains('service-header-tab')) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://newproject/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  var eventListenerAnimation = function eventListenerAnimation() {\n    document.addEventListener('click', function (event) {\n      var target = event.target,\n          targetMenu = target.closest('.menu'),\n          targetCloseBtn = target.closest('.close-btn'),\n          targetMenuItem = target.closest('ul>li>a');\n\n      if (targetMenu !== null && window.innerWidth < 768) {\n        menu.style.transform = 'translateX(100%)';\n      } else if (targetCloseBtn !== null && window.innerWidth < 768) {\n        menu.style.transform = 'translateX(-100%)';\n      } else if (targetMenuItem !== null && window.innerWidth < 768) {\n        menu.style.transform = 'translateX(-100%)';\n      }\n    });\n  };\n\n  eventListenerAnimation();\n\n  var eventListener = function eventListener() {\n    document.addEventListener('click', function (event) {\n      var target = event.target,\n          targetMenu = target.closest('.menu'),\n          targetCloseBtn = target.closest('.close-btn'),\n          targetMenuItem = target.closest('ul>li>a');\n\n      if (targetMenu !== null && window.innerWidth >= 768) {\n        menu.removeAttribute('style');\n        handlerMenu();\n      } else if ((targetCloseBtn !== null || targetMenuItem !== null) && window.innerWidth >= 768) {\n        handlerMenu();\n      }\n    });\n  };\n\n  eventListener();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://newproject/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popUp = document.querySelector('.popup'),\n      popUpContent = document.querySelector('.popup-content'),\n      service = document.querySelector('.service'),\n      popUpBtn = document.querySelectorAll('.popup-btn');\n\n  var openPopUp = function openPopUp() {\n    var count = 0;\n    var height = document.documentElement.offsetHeight / 50;\n    var openPopUpAnimation;\n\n    var openPopUp = function openPopUp() {\n      openPopUpAnimation = requestAnimationFrame(openPopUp);\n      count += 5;\n\n      if (count - 5 < height) {\n        popUpContent.style.top = count + 'px';\n      } else if (count === height) {\n        cancelAnimationFrame(openPopUp);\n      }\n    };\n\n    openPopUpAnimation = requestAnimationFrame(openPopUp);\n  };\n\n  service.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-btn')) {\n      popUpBtn.forEach(function (item) {\n        if (item === target && window.innerWidth < 768) {\n          popUp.style.display = 'block';\n        } else if (item === target && window.innerWidth >= 768) {\n          popUp.style.display = 'block';\n          openPopUp();\n        }\n      });\n    }\n  });\n  popUp.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popUp.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popUp.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://newproject/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/validateCalculator.js":
/*!*******************************************!*\
  !*** ./src/modules/validateCalculator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateCalculator = function validateCalculator() {\n  var calcBlock = document.querySelector('.calc-block');\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('[type=\"text\"]')) {\n      target.value = target.value.replace(/\\D/g, '');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateCalculator);\n\n//# sourceURL=webpack://newproject/./src/modules/validateCalculator.js?");

/***/ }),

/***/ "./src/modules/validateEmail.js":
/*!**************************************!*\
  !*** ./src/modules/validateEmail.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateEmail = function validateEmail() {\n  var email = document.querySelectorAll('[placeholder=\"E-mail\"');\n  email.forEach(function (item) {\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/[^a-z@\\-_.!~*']/ig, '');\n    });\n  });\n  var emailModal = document.querySelectorAll('[placeholder=\"Ваш E-mail\"');\n  emailModal.forEach(function (item) {\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/[^a-z@\\-_.!~*']/ig, '');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateEmail);\n\n//# sourceURL=webpack://newproject/./src/modules/validateEmail.js?");

/***/ }),

/***/ "./src/modules/validateNameAndMessage.js":
/*!***********************************************!*\
  !*** ./src/modules/validateNameAndMessage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateNameAndMessage = function validateNameAndMessage() {\n  var yourName = document.querySelectorAll('[placeholder=\"Ваше имя\"]'),\n      yourMessage = document.querySelectorAll('[placeholder=\"Ваше сообщение\"]');\n\n  var checkName = function checkName(event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^а-я-ё\\-\\s]/ig, '');\n  };\n\n  var checkMessage = function checkMessage(event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^а-я-ё\\d\\s.,!?:;]/ig, '');\n  };\n\n  yourName.forEach(function (item) {\n    item.addEventListener('input', checkName);\n    item.addEventListener('blur', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/ +/g, ' ').trim();\n      target.value = target.value.replace(/([А-ЯЁ])/g, function (x) {\n        return x.toLowerCase();\n      });\n      target.value = target.value.replace(/(( |^)[а-яё])(?=[а-яё])/g, function (x) {\n        return x.toUpperCase();\n      });\n    });\n  });\n  yourMessage.forEach(function (item) {\n    item.addEventListener('input', checkMessage);\n    item.addEventListener('blur', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/^[ -]*|( |-)(?=\\1)|[ -]*$/g, '').replace(/ +/g, ' ').trim();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateNameAndMessage);\n\n//# sourceURL=webpack://newproject/./src/modules/validateNameAndMessage.js?");

/***/ }),

/***/ "./src/modules/validateNumberPhone.js":
/*!********************************************!*\
  !*** ./src/modules/validateNumberPhone.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateNumberPhone = function validateNumberPhone() {\n  var phoneNumber = document.querySelectorAll('[placeholder=\"Номер телефона\"]');\n  phoneNumber.forEach(function (item) {\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/[^+0-9]/g, '');\n    });\n  });\n  var phoneNumberModal = document.querySelectorAll('[placeholder=\"Ваш номер телефона\"]');\n  phoneNumberModal.forEach(function (item) {\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/[^+0-9]/g, '');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateNumberPhone);\n\n//# sourceURL=webpack://newproject/./src/modules/validateNumberPhone.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;