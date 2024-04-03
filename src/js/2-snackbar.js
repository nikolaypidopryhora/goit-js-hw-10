import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const createButton = document.querySelector('.create-button');
const delayInput = document.querySelector('.delay-input');
const radioList = document.querySelectorAll('input[name=state]');

createButton.addEventListener('click', evt => {
  evt.preventDefault();
  let state = [...radioList].find(radio => radio.checked).value;
  const promise = createPromise(delayInput.value, state);
  promise.then(onFulfilled).catch(onRejected);
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (state) {
        case 'fulfilled':
          resolve(delay);
          break;

        case 'rejected':
          reject(delay);
          break;

        default:
          break;
      }
    }, delay);
  });
}

function onFulfilled(delay) {
  console.log(`✅ Fulfilled promise in ${delay}ms`);
  iziToast.success({
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight',
  });
}

function onRejected(delay) {
  console.log(`❌ Rejected promise in ${delay}ms`);
  iziToast.error({
    message: `❌ Rejected promise in ${delay}ms`,
    position: 'topRight',
  });
}
