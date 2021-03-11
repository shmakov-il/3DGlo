const changeImage = () => {
  const commandPhoto = document.querySelectorAll('.command__photo');

  commandPhoto.forEach(item => {
    item.addEventListener('mouseover', event => {
      const target = event.target;
      [target.src, target.dataset.img] = [target.dataset.img, target.src];
    });
  });

  commandPhoto.forEach(item => {
    item.addEventListener('mouseout', event => {
      const target = event.target;
      [target.dataset.img, target.src] = [target.src, target.dataset.img];
    });
  });
};

export default changeImage;