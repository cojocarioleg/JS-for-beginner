document.querySelector('.simple-todo').classList.remove('none');

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event){
  event.preventDefault();
  const taskText = todoInput.value;
  //const liEliment = `<li> ${taskText} </li>`;  
  //todoList.insertAdjacentHTML('beforeend', liEliment);
  const liEliment = document.createElement('li');
  liEliment.innerText = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerHTML = 'delete';
  deleteBtn.style['margin-left'] = '15px';
  liEliment.append(deleteBtn);

  //add dele tasck
  deleteBtn.addEventListener('click', function(){
    this.closest('li').remove();
  });
  
  todoList.append(liEliment);

  todoInput.value = '';
  todoInput.focus();
 
}

//function deleteTask(){ this.closest('li').remove();}