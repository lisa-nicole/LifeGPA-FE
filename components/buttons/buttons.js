const buttons = document.querySelectorAll('button');

buttons.forEach(btn =>
  btn.addEventListener('click', event => {
    btn.classList.toggle('btn-click');
  })
);
