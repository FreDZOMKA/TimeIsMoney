let stopwatchInterval;
let stopwatchTime = 0;

function formatTime(timeInSeconds) {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = timeInSeconds % 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

function startStopwatch() {
  stopwatchInterval = setInterval(function () {
    document.getElementById("stopwatch").textContent = formatTime(stopwatchTime);
    stopwatchTime++;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  document.getElementById("stopwatch").textContent = formatTime(stopwatchTime);
}

document.getElementById("startButton").addEventListener("click", startStopwatch);
document.getElementById("stopButton").addEventListener("click", stopStopwatch);
document.getElementById("resetButton").addEventListener("click", resetStopwatch);
