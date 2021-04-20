// Открытие/закрытие модального окна
// Модальное окно с формой заявки открывается по клику на кнопку "Заказать услугу". Для того чтобы скрипт сработал 
// необходимо добавить в разметку специальные атрибуты, по которым скрипт ищет элементы:

// data-modal-open - на кнопку открытия модального окна.
// data-modal-close - на кнопку закрытия модального окна.
// data-modal - на бекдроп модального окна.
// После чего, перед закрывающим тегом body добавить тег script со ссылкой на файл скрипта для модально окна. 
// Можно посмотреть видео-инструкцию.


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
  }
})();