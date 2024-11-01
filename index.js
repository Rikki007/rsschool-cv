(function() {
  const codeButtons = document.querySelectorAll('.themes__item');
  const board = document.querySelector('.show-board');
  const image = document.createElement('img');
  image.classList.add('show-board__image');
  image.src = './pic/number-min.png';
  board.appendChild(image)

  codeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      codeButtons.forEach((item) => {
        item.classList.remove('themes__item_active')
      });
      if (button.textContent === 'number') {
        image.src = './pic/number-min.png';
        button.classList.add('themes__item_active');
      }
      if (button.textContent === 'string') {
        image.src = './pic/string-min.png';
        button.classList.add('themes__item_active');
      }
      if (button.textContent === 'object') {
        image.src = './pic/object-min.png';
        button.classList.add('themes__item_active');
      }
      if (button.textContent === 'array') {
        image.src = './pic/array-min.png';
        button.classList.add('themes__item_active');
      }
      if (button.textContent === 'class') {
        image.src = './pic/class-min.png';
        button.classList.add('themes__item_active');
      }
    });
  });

})();