let timer = document.getElementById("timer");
let pomodoroBtn = document.getElementById("pomodoro-btn");
let shortBreakBtn = document.getElementById("short-break-btn");
let longBreakBtn = document.getElementById("long-break-btn");
let startStopBtn = document.getElementById("start-stop-btn");
let resetBtn = document.getElementById("reset-btn");
let msg = document.getElementsByClassName("msg")[0];

let minutes = 25;
let seconds = 0;
let interval;
let timerType = "pomodoro";

let sound = document.createElement("audio");
sound.setAttribute("src", "https://www.soundjay.com/buttons/sounds/beep-06.mp3");

// change timer type and corresponding displays
function changeTimerType(type) {
  // reset timer display
  clearInterval(interval);
  seconds = 0;
  startStopBtn.textContent = "START";
  if (type == "pomodoro") {
    timerType = "pomodoro";
    minutes = 25;
    timer.textContent = "25:00";
    msg.textContent = "Time to focus!";
    changeColor("#eb615b", "pomodoro");
  } else if (type == "short-break") {
    timerType = "short-break";
    minutes = 5;
    timer.textContent = "05:00";
    msg.textContent = "Time for a short break!";
    changeColor("#4a9eb5", "short-break");
  } else if (type == "long-break") {
    timerType = "long-break";
    minutes = 10;
    timer.textContent = "10:00";
    msg.textContent = "Time for a long break!";
    changeColor("#45a868", "long-break");
  }
}

// changes color of button font and background
// depending on selected timer type
function changeColor(color, btn) {
  document.body.style.background = color;
  pomodoroBtn.style.color = color;
  shortBreakBtn.style.color = color;
  longBreakBtn.style.color = color;
  startStopBtn.style.color = color;
  resetBtn.style.color = color;

  shortBreakBtn.style.background = "#FFFFFF";
  longBreakBtn.style.background = "#FFFFFF";
  pomodoroBtn.style.background = "#FFFFFF";

  // apply highlight to selected timer type button
  if (btn === "pomodoro") {
    pomodoroBtn.style.background = "rgba(255, 255, 255, 0.7)";
  } else if (btn === "short-break") {
    shortBreakBtn.style.background = "rgba(255, 255, 255, 0.7)";
  } else if (btn === "long-break") {
    longBreakBtn.style.background = "rgba(255, 255, 255, 0.7)";
  }
}

// start and stop timer
startStopBtn.addEventListener("click", () => {
  if (startStopBtn.textContent === "START") {
    startStopBtn.textContent = "STOP";
    let duration = minutes * 60 + seconds;
    interval = setInterval(() => {
      minutes = parseInt(duration / 60, 10);
      seconds = parseInt(duration % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timer.textContent = minutes + ":" + seconds;
      if (--duration < 0) {
          clearInterval(interval);
          sound.currentTime = 0;
          sound.loop = "true";
          sound.play();
          setTimeout(() => {
            sound.pause();
          }, 4000);
          updateMinutes();
          timer.textContent = minutes < 10 ? "0" + minutes : minutes;
          timer.textContent += ":0" + seconds;
          startStopBtn.textContent = "START";
      }
    }, 1000);
  } else if (startStopBtn.textContent === "STOP") {
    startStopBtn.textContent = "START";
    clearInterval(interval);
  }
});

function updateMinutes() {
  if (timerType === "pomodoro") {
    minutes = 25;
  } else if (timerType === "short-break") {
    minutes = 5;
  } else if (timerType === "long-break") {
    minutes = 10;
  }
  seconds = 0;
}

// reset timer display
resetBtn.addEventListener("click", () => {
  startStopBtn.textContent = "START";
  clearInterval(interval);
  updateMinutes();
  // add leading zero if necessary
  timer.textContent = minutes < 10 ? "0" + minutes : minutes;
  timer.textContent += ":0" + seconds;
})