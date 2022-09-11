import Notiflix from 'notiflix';


const formElement = document.querySelector('.form');

function create(event) {
  event.preventDefault();

  const {elements: { delay, step, amount}
} = event.currentTarget;

let delayValue = Number(delay.value);
let stepValue = Number(step.value);
let amountValue = Number(amount.value);

for(let i=1; i<=amountValue; i+=1){
  createPromise(i, delayValue)
  .then(({position, delay}) => {
    setTimeout(()=>{
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    }, delay);
  })
.catch(({position, delay}) => {
  setTimeout(()=>{
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  }, delay);
})
delayValue+=stepValue
}

}
  

formElement.addEventListener("submit", create)


function createPromise(position, delay) {
  return new Promise((resolve, reject) =>
   {    setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay})
  }
   }, delay)
  }
  )
}



