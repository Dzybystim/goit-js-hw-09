
const buttonStartElement = document.querySelector('button[data-start]');
const buttonStopElement = document.querySelector('button[data-stop]');
const bodyElement = document.querySelector('body');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

 let change = null;
 

function colorChange(event) {
    event.preventDefault();
    
    buttonStopElement.removeAttribute('disabled');
    buttonStartElement.disabled = "true";

    bodyElement.style.backgroundColor = getRandomHexColor();

    change = setInterval(() => {
        bodyElement.style.backgroundColor = getRandomHexColor();
    }, 1000)

  }

  function stopColorChange(event) {
    event.preventDefault();

    buttonStartElement.removeAttribute('disabled');
    buttonStopElement.disabled = "true";

    clearInterval(change);
  }

  buttonStartElement.addEventListener('click', colorChange);
  buttonStopElement.addEventListener('click', stopColorChange);