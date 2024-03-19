let timer;
let time = 0;
let isRunning = false;

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const stopwatchDisplay = document.querySelector(".stopwatch");
const lapList = document.getElementById("lapList");

startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", pauseStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", lapStopwatch);

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateStopwatch, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  time = -1;
  updateStopwatch();
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  lapBtn.disabled = true;
  lapList.innerHTML = "";
}

function lapStopwatch() {
  const lapTime = formatTime(time);
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  lapList.appendChild(lapItem);
}

function updateStopwatch() {
  time++;
  stopwatchDisplay.textContent = formatTime(time);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}
