const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener('click', showHidenBlock);

function showHidenBlock(){  
  //content.classList.toggle('content-hidden');
  if (content.classList.toggle('content-hidden')) {
    button.textContent = 'show Block';
  } else {
    button.textContent = 'hiden Block';
  }
  //changeButtonText();
}

/*function changeButtonText(){
  if (content.classList.contains('content-hidden')) {
    button.textContent = 'hiden Block';
  } else {
    button.textContent = 'show Block';
  }
}*/

