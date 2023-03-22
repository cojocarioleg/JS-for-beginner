const button = document.querySelector('[data-modal-button="modal-1"]');
const dataModalClose =document.querySelector('[data-modal-close]');
const singleModal = document.querySelector('#modal-1');
const singleModalWindow = singleModal.querySelector('.modal-window');

button.addEventListener('click', modal);
dataModalClose.addEventListener('click', ()=>{
  singleModal.classList.add('hidden');
});

singleModal.addEventListener('click', ()=>{
  singleModal.classList.toggle('hidden');
});

singleModalWindow.addEventListener('click', (event)=>{
  event.stopPropagation();
});

function modal(){
  singleModal.classList.remove('hidden');
}

