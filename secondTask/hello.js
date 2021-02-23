'use strict';
// Задаем текущую дату, относительно которой будем получать день недели, время, время суток и время до нового года
const date = new Date();

// Рассчитаем время до нового года
function getNewYear(newYear) {
  const dayNow = date.getTime(),
    dayNewYear = new Date(newYear),
    howNewYear = Math.ceil((dayNewYear - dayNow) / 1000 / 60 / 60 / 24);
  return howNewYear;
}
getNewYear('1 january 2022 00:00:00');

// Определяем время суток (6-11 - Утро, 11-16 - День, 16-21 - Вечер, 21-6 - Ночь)
function getTimeOfDay() {
  if (date.getHours() >= 6 && date.getHours() <= 11) {
    const timeDay = 'Доброе утро!';
    return timeDay;
  }
  if (date.getHours() > 11 && date.getHours() <= 16) {
    const timeDay = 'Добрый день!';
    return timeDay;
  }
  if (date.getHours() > 16 && date.getHours() <= 21) {
    const timeDay = 'Добрый вечер!';
    return timeDay;
  }
  if (date.getHours() > 21 && date.getHours() < 6) {
    const timeDay = 'Доброй ночи!';
    return timeDay;
  }
}
getTimeOfDay();

// Вывод на экран
document.body.innerHTML = (`
${getTimeOfDay()} <br/><br/>
Сегодня: ${date.toLocaleString('ru', { weekday: 'long' })} <br/><br/>
Текущее время: ${date.toLocaleTimeString('en')} <br/><br/>
До нового года осталось ${getNewYear('1 january 2022 00:00:00')} дней
`);
