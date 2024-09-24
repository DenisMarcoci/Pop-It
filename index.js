const buyButtons = document.querySelectorAll('.button');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Продукт добавлен в корзину!');
  });
});
