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

export default validateEmail;