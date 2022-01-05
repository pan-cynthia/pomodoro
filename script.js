let display = document.getElementById("timer");
let pomodoroBtn = document.getElementById("pomodoro-btn");
let shortBreakBtn = document.getElementById("short-break-btn");
let longBreakBtn = document.getElementById("long-break-btn");
let startBtn = document.getElementById("start-btn");
let resetBtn = document.getElementById("reset-btn");
let msg = document.getElementsByClassName("msg")[0];

let minutes = 25;

function startTimer() {
  console.log("started timer");
  document.getElementById("start-btn").textContent = "STOP";
}

function resetTimer() {

}

function changeTimerType(type) {
  if (type == "pomodoro") {
    minutes = 25;
    display.textContent = "25:00";
    msg.textContent = "Time to focus!";
    changeColor("#eb615b", "pomodoro");
  } else if (type == "short-break") {
    minutes = 5;
    display.textContent = "05:00";
    msg.textContent = "Time for a short break!";
    changeColor("#4a9eb5", "short-break");
  } else if (type == "long-break") {
    minutes = 10;
    display.textContent = "10:00";
    msg.textContent = "Time for a long break!";
    changeColor("#45a868", "long-break");
  }
  console.log(minutes);
}

function changeColor(color, btn) {
  document.body.style.background = color;
  pomodoroBtn.style.color = color;
  shortBreakBtn.style.color = color;
  longBreakBtn.style.color = color;
  startBtn.style.color = color;
  resetBtn.style.color = color;

  shortBreakBtn.style.background = "#FFFFFF";
  longBreakBtn.style.background = "#FFFFFF";
  pomodoroBtn.style.background = "#FFFFFF";

  if (btn === "pomodoro") {
    pomodoroBtn.style.background = "rgba(255, 255, 255, 0.7)";
  } else if (btn === "short-break") {
    shortBreakBtn.style.background = "rgba(255, 255, 255, 0.7)";
  } else if (btn === "long-break") {
    longBreakBtn.style.background = "rgba(255, 255, 255, 0.7)";
  }
}

startBtn.addEventListener("click", () => {
  startTimer();
})

resetBtn.addEventListener("click", () => {
  resetTimer();
})