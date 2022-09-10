import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePickerElement = document.querySelector('input#datetime-picker');
const buttonStartElement = document.querySelector('button[data-start]');
const daysElement = document.querySelector('span[data-days]');
const hoursElement = document.querySelector('span[data-hours]');
const minutesElement = document.querySelector('span[data-minutes]');
const secondsElement = document.querySelector('span[data-seconds]');

buttonStartElement.disabled = "true";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      buttonStartElement.removeAttribute('disabled');

      const date = new Date();
      const nowDateMs = date.getTime();
      const changeDateMs = selectedDates[0].getTime()
     
      if(nowDateMs > changeDateMs) {
        return window.alert("Please choose a date in the future");
      } else {
        
    function timeRecord(event) {

    let diff = changeDateMs-nowDateMs;
    let diffConvertMs = convertMs(diff);

    daysElement.textContent = diffConvertMs.days
    hoursElement.textContent = diffConvertMs.hours
    minutesElement.textContent = diffConvertMs.minutes
    secondsElement.textContent = diffConvertMs.seconds

       }



    buttonStartElement.addEventListener('click', timeRecord);

    

      }

      


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



