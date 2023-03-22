let counter = 0;
let timerId;
const counterElement = document.querySelector('#counter');


//start
const btnStart = document.querySelector('#start');
btnStart.onclick = ()=>{
  timerId = setInterval(() => {
    counter++;  
    counterElement.innerText = counter;
  }, 1000);
}

//stop
const btnStop = document.querySelector('#pause');
btnStop.onclick = ()=>{
  clearInterval(timerId);
}

//reset
btnReset = document.querySelector('#reset');
btnReset.onclick =()=>{
  counter = 0;
  counterElement.innerText = counter;
  clearInterval(timerId);
  
}


