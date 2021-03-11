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

export default validateNameAndMessage;