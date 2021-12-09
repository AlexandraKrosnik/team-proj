(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-open]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    modal: document.querySelector('[data-location]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[about-modal-open]'),
    closeModalBtn: document.querySelector('[about-modal-close]'),
    modal: document.querySelector('[about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('about__backdrop--hidden');
    document.body.classList.toggle('overflow-hidden');
  }
})();

(() => {
  const refs = {
    open2ModalBtn: document.querySelector('[data-open-1]'),
    open1ModalBtn: document.querySelector('[data-open-2]'),
    closeModalBtn: document.querySelector('[data-close-header]'),
    modal: document.querySelector('[data-modal-header]'),
  };

  refs.open1ModalBtn.addEventListener('click', toggleModal);
  refs.open2ModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('overflow-hidden');
  }
})();
