// !! ---->  Timer on Class  <-----

const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
    this.init();
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  init() {
    setInterval(() => {
      const currentTime = Date.now();
      const leftUntilTargetDate = this.targetDate - currentTime;
      const time = this.getTimeComponents(leftUntilTargetDate);
      this.onTick(time);
    }, 1001);
  }

  getTimeComponents(time) {
    const days = -Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}

function updateClockfase({ days, hours, mins, secs }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;

  console.log({ days, hours, mins, secs });
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2022, 5, 1, 18),
  onTick: updateClockfase,
});
