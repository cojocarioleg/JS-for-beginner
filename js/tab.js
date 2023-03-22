const dataTabLi =document.querySelectorAll('[data-tab]');
const dataTabContents = document.querySelectorAll('[data-tab-content]');

dataTabLi.forEach((item) => {
  item.addEventListener('click', listener);
  
});
function listener(){
  
  dataTabContents.forEach((item)=>{
    item.classList.add('hidden');
  });

  const dataTabContent = document.querySelector('#' + this.dataset.tab);
  dataTabContent.classList.remove('hidden');


}