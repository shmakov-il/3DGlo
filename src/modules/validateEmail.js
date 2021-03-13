const validateEmail = () => {
  const email = document.querySelectorAll('[placeholder="E-mail"');
  email.forEach(item => {
    item.setAttribute('required', '');
    item.addEventListener('input', event => {
      const target = event.target;
      target.value = target.value.replace(/[^a-z@\-.']/ig, '');
    });
    item.addEventListener('blur', event => {
      const target = event.target;
      const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(target.value) === false) {
        target.value = '';
        return false;
      }
    });
  });
  const emailModal = document.querySelectorAll('[placeholder="Ваш E-mail"');
  emailModal.forEach(item => {
    item.setAttribute('required', '');
    item.addEventListener('input', event => {
      const target = event.target;
      target.value = target.value.replace(/[^a-z@\-.']/ig, '');
    });
    item.addEventListener('blur', event => {
      const target = event.target;
      const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(target.value) === false) {
        target.value = '';
        return false;
      }
    });
  });
};

export default validateEmail;