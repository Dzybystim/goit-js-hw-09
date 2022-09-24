import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const datetimePickerElement = document.querySelector('input#datetime-picker');
const buttonStartElement = document.querySelector('button[data-start]');
const daysElement = document.querySelector('span[data-days]');
const hoursElement = document.querySelector('span[data-hours]');
const minutesElement = document.querySelector('span[data-minutes]');
const secondsElement = document.querySelector('span[data-seconds]');
const timerElement = document.querySelector('.timer');
const fieldElement = document.querySelectorAll('.field');
const labelElement = document.querySelectorAll('.label');
const valueElement = document.querySelectorAll('.value');

// Добавляю стили
buttonStartElement.disabled = "true";
buttonStartElement.style.display = "inline-flex";
buttonStartElement.style.margin = "5px";
buttonStartElement.style.border = "2px solid #4C4B63";
buttonStartElement.style.fontSize = "10px";
buttonStartElement.style.lineHeight = "10px";
buttonStartElement.style.padding = "6px 15px";
buttonStartElement.style.color = "#FFF";
buttonStartElement.style.fontWeight = "bold";
buttonStartElement.style.textTransform = "uppercase";
buttonStartElement.style.background = "#ABA8B2";

timerElement.style.display = "flex";

fieldElement.forEach(element => {
  element.style.padding = "10px";
});

labelElement.forEach(element => {
  element.style.display = "block";
  element.style.textAlign = "center";
  element.style.fontSize = "12px"
})

valueElement.forEach(element => {
  element.style.display = "block"
  element.style.textAlign = "center";
  element.style.fontWeight = "bold";
  
})

//Добавлять стили закончил


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

      const date = new Date();
      const nowDateMs = date.getTime();
      const changeDateMs = selectedDates[0].getTime()
     
    if(nowDateMs > changeDateMs) {
        return Notiflix.Report.info("Please choose a date in the future");
      } 
    buttonStartElement.removeAttribute('disabled');

    buttonStartElement.addEventListener('click', () => {
      setInterval(() => {
        let diff = changeDateMs-new Date();
        let diffConvertMs = convertMs(diff);


        daysElement.textContent = diffConvertMs.days<=0 ? '00': addLeadingZero(diffConvertMs.days);
        hoursElement.textContent = diffConvertMs.hours<=0 ? '00':  addLeadingZero(diffConvertMs.hours);
        minutesElement.textContent = diffConvertMs.minutes<=0 ? '00':  addLeadingZero(diffConvertMs.minutes);
        secondsElement.textContent = diffConvertMs.seconds<=0 ? '00':  addLeadingZero(diffConvertMs.seconds);


       function addLeadingZero(value){
          if(value < 10) {
            return "0"+value
          }
          return value
        }
      
      }, 1000)})

    },

  };


  flatpickr(datetimePickerElement, options);

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }



