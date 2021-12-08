(() => {
  const ref = {
    RotateCard: document.querySelector('[card-rotate]'),    
    card: document.querySelector('[card]'),
  };

  ref.RotateCard.addEventListener('click', toggleModal);  

  function toggleModal() {
    ref.card.classList.toggle('is-rotate');
  }
})();
(() => {
  const ref = {
    RotateCard: document.querySelector('[card-rotate2]'),    
    card: document.querySelector('[card2]'),
  };

  ref.RotateCard.addEventListener('click', toggleModal);  

  function toggleModal() {
    ref.card.classList.toggle('is-rotate');
  }
})();
(() => {
  const ref = {
    RotateCard: document.querySelector('[card-rotate3]'),    
    card: document.querySelector('[card3]'),
  };

  ref.RotateCard.addEventListener('click', toggleModal);  

  function toggleModal() {
    ref.card.classList.toggle('is-rotate');
  }
})();