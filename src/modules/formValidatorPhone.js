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
            const result = inputValue.replace(/[a-zа-яё/.,\-=_)({*&$%#@'"!~^:;?`<>№|\\})]/gi, '');
            inputValue = result;
            if (inputValue.length < 11) {
              inputValue = '';
              return inputValue;
            } else {
              if (firstDigit === '+') {
                if (inputValue.substr(1).includes('+')) {
                  inputValue = '';
                  return inputValue;
                } else if (inputValue[1] !== '7') {
                  inputValue = '';
                  return inputValue;
                } else {
                  inputValue = inputValue.substr(0, 12);
                  return inputValue;
                }
              } else if (firstDigit === '7' || firstDigit === '8') {
                if (inputValue.substr(1).includes('+')) {
                  inputValue = '';
                  return inputValue;
                } else {
                  inputValue = inputValue.substr(0, 11);
                  return inputValue;
                }
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

export default formValidatorPhone;