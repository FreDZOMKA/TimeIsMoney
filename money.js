//Load Script
console.log("money.js script loaded");

// I can't write | for some reason. Keyboard inputs are of.


//Div for numbers
const numberItemsDiv = document.querySelector("#numberBox");
//i.e 0s 0kr
const timeDisplay = document.createElement("p");
const moneyDisplay = document.createElement("p");

//Buttons
const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const resetButton = document.querySelector("#resetButton");

//Input Items i.e 1000 kr per DAY
const inputContainerDiv = document.querySelector("#inputItems");
const salaryInputEl = document.createElement("input");
const timeUnitSelect = document.querySelector("#timeUnitSelect");

//Display Income Per Second
const icpsElement = document.querySelector("#icps");

//Create Variables
let icpsInt = 0;
let timeUnit = "hour";
let amountOfSeconds = 3600;

let timePlaceHolder = 0 + "s";

let timerIsOn = false;

//Converting Time
let timeInSeconds;
let timeIn10th;

//Catching Written salary and salary in started timer.
let activeSalary;
let salary = 0;

//Generate Error P and Switch
const inputEmptyErEl = document.createElement("p");
let errorIsDisplayed = false;


let timerInterval; //to prevent reset error
let timeUnits = ["hour", "day", "week", "month", "year"];



//Assign attributes to elements
startButton.classList.add("buttonStyle");
stopButton.classList.add("buttonStyle");
resetButton.classList.add("buttonStyle");

timeDisplay.innerText = timePlaceHolder;
moneyDisplay.innerText = salary + " kr";

timeDisplay.classList.add("timerNumber");
moneyDisplay.classList.add("timerNumber");

salaryInputEl.placeholder = "Input your Salary";
salaryInputEl.setAttribute("id", "userSalary");
salaryInputEl.setAttribute("type", "number");

numberItemsDiv.appendChild(timeDisplay);
numberItemsDiv.appendChild(moneyDisplay);

inputContainerDiv.appendChild(salaryInputEl);

inputEmptyErEl.textContent = "Input income to start timer.";
inputEmptyErEl.setAttribute("class", "redText");

icpsElement.innerText = "That's " + icpsInt + " kr per second";

//Init Time on load for timer
function setTime() {
  timeIn10th = 0;
}
setTime();

//Functions for elements
timeUnitSelect.addEventListener("change", function () {
  console.log(this.value);

  timeUnit = this.value;
  if (timeUnit == "hour") {
    amountOfSeconds = 3600;

    console.log("Hour was selected.");
  } else if (timeUnit == "day") {
    amountOfSeconds = 86400;

    console.log("Day was selected.");
  } else if (timeUnit == "week") {
    amountOfSeconds = 604800;

    console.log("Month was selected.");
  } else if (timeUnit == "month") {
    amountOfSeconds = 2628000;

    console.log("Month was selected.");
  } else if (timeUnit == "year") {
    amountOfSeconds = 31536000;

    console.log("Year was selected.");
  }

  console.log(amountOfSeconds);
  updateICPS();
});

function updateICPS() {
  icpsInt = (salary / amountOfSeconds).toFixed(2);
  icpsElement.innerText = "That's " + icpsInt + " kr per second";
}

//Used to create the options for what time unit salary is in.
timeUnits.forEach((unit) => {
  let unitEl = document.createElement("option");
  unitEl.innerText = unit;
  unitEl.value = unit;

  timeUnitSelect.appendChild(unitEl);
});

//For every keypress check the salary value
document.body.addEventListener("keyup", () => {
  if (timerIsOn == false) {
    salary = Number(salaryInputEl.value);
    updateICPS();
    console.log(salary, activeSalary);
  }
});

//Start that uses interval for timer, formats seconds to also shows deciseconds and updates element
startButton.addEventListener("click", () => {
  if (activeSalary == salary || activeSalary == undefined) {
    activeSalary = salary;
  } else if (activeSalary !== salary) {
    resetTimer();
    activeSalary = salary;
  }
  startTimer();
  console.log(salary, activeSalary);
});

function startTimer() {
  if (timerIsOn == false && salary !== 0) {
    timerIsOn = true;
    if (timerIsOn == true) {
      timerInterval = setInterval(function () {
        timeIn10th = timeIn10th + 0.1;
        timeInSeconds = timeIn10th;
        timeDisplay.innerText = timeInSeconds.toFixed(1) + "s";
        moneyDisplay.innerText = ((salary / amountOfSeconds) * timeInSeconds).toFixed(2) + " kr";
      }, 100);
    }
  }
  //Catch Empty Input, display message
  else console.log("Timer is already on, stop or reset? Input your salary please.");

  if (errorIsDisplayed == false) {
    inputContainerDiv.appendChild(inputEmptyErEl);
    errorIsDisplayed = true;
  }
  if (errorIsDisplayed == true && salary != 0) {
    inputContainerDiv.removeChild(inputEmptyErEl);
    errorIsDisplayed = false;
  }
} //Did you know that not inluding the term function (or the short hand ()=> here fires the event on page load?

//Stop Timer
stopButton.addEventListener("click", function stopTimer() {
  if (timerIsOn == true) {
    clearInterval(timerInterval);
    timerIsOn = false;
  } else {
    console.log("Timer is not on and therefore can't be stopped");
  }
});

//Reset Timer
resetButton.addEventListener("click", resetTimer);
function resetTimer() {
  try {
    if (timerIsOn == true || timerIsOn == false) clearInterval(timerInterval);
    timeDisplay.innerText = timePlaceHolder;
    moneyDisplay.innerText = 0 + " kr";
    timerIsOn = false;
    setTime();
    activeSalary = undefined;
  } catch (error) {
    //Error Response
    console.error("An error occured when resetting timer", error.message);
  }
}
export {icpsInt,salary}