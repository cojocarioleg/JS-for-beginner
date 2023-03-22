const modalButtons = document.querySelectorAll('[data-modal-button]');
const closeButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]'); 

//envents
//open modal window
modalButtons.forEach((item)=>{
  item.addEventListener('click', clickButon);
});

//close modal window
closeButtons.forEach((index) => {
  index.addEventListener('click', closeModalButton);
})

//close modal fith feid
allModals.forEach((index)=>{
  index.addEventListener('click', closeModalWindowFeid)
})

//functions

function clickButon(){
  const modalButton = this.dataset.modalButton;
  const modalId = document.querySelector('#' + modalButton);
  modalId.classList.remove('hidden');

  modalId.querySelector('.modal-window').addEventListener('click', (event)=>{
    event.stopPropagation();
  });
}

function closeModalButton(){
  const modal =  this.closest('[data-modal]');
  modal.classList.add('hidden');
}

function closeModalWindowFeid(){
  this.classList.add('hidden');
}