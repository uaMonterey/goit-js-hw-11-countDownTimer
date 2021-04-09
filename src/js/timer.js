// !! ---->  Timer on functions  <-----

const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

const DATE = new Date(2021, 7, 11, 8);

const timer = {
  start(date) {
    timeUpdater(date);
    setInterval(() => {
      timeUpdater(date);
    }, 1000);
  },
};

timer.start(DATE);

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function updateClockfase({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;

  console.log({ days, hours, mins, secs });
}

function timeUpdater(date) {
  const birthday = new Date(date);
  const currentTime = Date.now();
  const timeUntilBirthday = birthday - currentTime;
  const { days, hours, mins, secs } = getTimeComponents(timeUntilBirthday);
  updateClockfase({ days, hours, mins, secs });
}
