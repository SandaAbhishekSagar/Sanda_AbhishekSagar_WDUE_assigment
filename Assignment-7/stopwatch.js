
let timeLabel = document.getElementById('time-label');
let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');
let interval;
let startTime;
let totalSeconds = 0;

startBtn.addEventListener('click', () => {
    if (!interval) {
        startTime = new Date();
        interval = setInterval(() => {
            let currentTime = new Date();
            let elapsedTime = (currentTime - startTime) / 1000;
            let hours = Math.floor(elapsedTime / 3600);
            let minutes = Math.floor((elapsedTime % 3600) / 60);
            let seconds = Math.floor(elapsedTime % 60);

            timeLabel.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        }, 1000);
    }
});
document.getElementById('date-picker').addEventListener('input', function() {
    var date = new Date(this.value);
    var now = new Date();

    if (date.getTime() < now.getTime()||date.getTime() > now.getTime()) {
        alert('Date canot be changed.');
        this.value = '';
    }
});
stopBtn.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
        startTime = null;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    startTime = null;
    totalSeconds = 0;
    timeLabel.textContent = '00:00:00';
});

function pad(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}