const sendForm = form => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Отправлено!',
    statusMessage = document.createElement('div');

  statusMessage.style.cssText = `font-size: 2rem; 
  color: white; 
  `;

  const postData = body =>
    fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

  form.appendChild(statusMessage);
  statusMessage.textContent = loadMessage;
  const formData = new FormData(form),
    body = {};
  formData.forEach((val, key) => {
    body[key] = val;
  });

  postData(body)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      form.reset();
      statusMessage.innerHTML = successMessage;
      setTimeout(() => {
        statusMessage.parentNode.removeChild(statusMessage);
      }, 5000);
    })
    .catch(error => {
      statusMessage.innerHTML = errorMessage;
      console.error(error);
    });
};

const activateSendForm = () => {
  document.body.addEventListener('submit', event => {
    event.preventDefault();
    sendForm(event.target);
  });
};

export default activateSendForm;