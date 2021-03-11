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

export default countTimer;