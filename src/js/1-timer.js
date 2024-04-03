import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;

const startBtn = document.querySelector('[data-start]');
const datetimePicker = document.querySelector('#datetime-picker');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', () => {
  datetimePicker.disabled = true;
  startBtn.disabled = true;
  const intervalId = setInterval(() => {
    let currentDate = Date.now();
    let leftDate = userSelectedDate - currentDate;
    let parsedLeftDate = convertMs(leftDate);
    days.textContent = addLeadingZero(parsedLeftDate.days);
    hours.textContent = addLeadingZero(parsedLeftDate.hours);
    minutes.textContent = addLeadingZero(parsedLeftDate.minutes);
    seconds.textContent = addLeadingZero(parsedLeftDate.seconds);
    if (leftDate < 1000) clearInterval(intervalId);
  }, 1000);
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Number(Date.now()) > Number(selectedDates[0])) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDates[0];
      startBtn.disabled = false;
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

flatpickr(datetimePicker, options);
