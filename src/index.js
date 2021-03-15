'use strict';


import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImage from './modules/changeImage';
import validateCalculator from './modules/validateCalculator';
import validateNumberPhone from './modules/validateNumberPhone';
import validateEmail from './modules/validateEmail';
import validateNameAndMessage from './modules/validateNameAndMessage';
import formValidatorPhone from './modules/formValidatorPhone';
import calc from './modules/calc';
import activateSendForm from './modules/sendForm';
import sliderCarusel from './modules/sliderCarusel';

// Timer
countTimer('16 march 2021');
// Menu
toggleMenu();
// PopUp
togglePopUp();
// Tabs
tabs();
// Слайдер
slider();
// Наша команда
changeImage();
// Калькулятор (ввод только цифр)
validateCalculator();
// Проверка номера телефона
validateNumberPhone();
// Проверка email
validateEmail();
// Проверка имени и сообщения
validateNameAndMessage();
// Проверка ввода +7 и 8 в номере телефона
formValidatorPhone();
// Калькулятор
calc();
// Отправка данных на сервер
activateSendForm();
// Слайдер-карусель
sliderCarusel();