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

export default validateNumberPhone;