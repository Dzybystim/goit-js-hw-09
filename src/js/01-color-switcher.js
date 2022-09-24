
const buttonStartElement = document.querySelector('button[data-start]');
const buttonStopElement = document.querySelector('button[data-stop]');
const bodyElement = document.querySelector('body');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

 let intervalId = null;
 
 buttonStopElement.disabled = "true";

function colorChange(event) {
    event.preventDefault();
    
    stopActive()

    bodyElement.style.backgroundColor = getRandomHexColor();

    intervalId = setInterval(() => {
        bodyElement.style.backgroundColor = getRandomHexColor();
    }, 1000)

  }

  function stopColorChange(event) {
    event.preventDefault();

    startActive()

    clearInterval(intervalId);
  }


  function stopActive() {
    buttonStopElement.removeAttribute('disabled');
    buttonStartElement.disabled = "true";
  }

  function startActive() {
    buttonStartElement.removeAttribute('disabled');
    buttonStopElement.disabled = "true";  
  }



  buttonStartElement.addEventListener('click', colorChange);
  buttonStopElement.addEventListener('click', stopColorChange);