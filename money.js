//Load Script
console.log("money.js script loaded")

// I can't write | for some reason. Keyboard inputs are of.

//Get or create elements
const numberItemsDiv = document.querySelector("#numberBox")
const inputContainerDiv = document.querySelector('#inputItems')
const timeDisplay = document.createElement("p")
const moneyDisplay = document.createElement("p")
const startButton = document.querySelector("#startButton")
const stopButton = document.querySelector("#stopButton")
const resetButton = document.querySelector('#resetButton')
const salaryInputEl = document.createElement('input')
const timeUnitSelect = document.querySelector('#timeUnitSelect')


//Create Variables
let timeUnit = 'hour'
let amountOfSeconds = 3600
let timePlaceHolder = 0 + "s"
let timerIsOn = false
let timeIn10th
let salary = 0
const inputEmptyErEl = document.createElement("p")
let errorIsDisplayed = false
let timerInterval //to prevent reset error
let timeUnits = ["hour", "day", "week", "month", "year"]

function setTime(){
    timeIn10th = 0
}
setTime()

//Assign attributes to elements
startButton.classList.add('buttonStyle')
stopButton.classList.add('buttonStyle')
resetButton.classList.add('buttonStyle')

timeDisplay.innerText = timePlaceHolder
moneyDisplay.innerText = salary + " kr"

timeDisplay.classList.add('timerNumber')
moneyDisplay.classList.add('timerNumber')

salaryInputEl.placeholder = "Input your Salary"
salaryInputEl.setAttribute("id", "userSalary")
salaryInputEl.setAttribute("type", "number")

numberItemsDiv.appendChild(timeDisplay)
numberItemsDiv.appendChild(moneyDisplay)

inputContainerDiv.appendChild(salaryInputEl)

inputEmptyErEl.textContent = 'Input income to start timer.'
inputEmptyErEl.setAttribute('class', 'redText')


//Functions for elements
timeUnitSelect.addEventListener("change", function (){
    console.log(this.value)

    timeUnit = this.value
    if (timeUnit == 'hour'){
        amountOfSeconds = 3600
        
        console.log("Hour was selected.")
    }
    else if (timeUnit == 'day'){
        amountOfSeconds = 86400

        console.log("Day was selected.")
    }
    else if (timeUnit == 'week'){
        amountOfSeconds = 657000

        console.log("Month was selected.")
    }
    else if (timeUnit == 'month'){
        amountOfSeconds = 2628000

        console.log("Month was selected.")
    }
    else if (timeUnit == 'year'){
        amountOfSeconds = 31536000

        console.log("Year was selected.")

    }
    
    console.log(amountOfSeconds)
})

var a = document.getElementById('country');

//Used to create the options for what time unit salary is in.
timeUnits.forEach(unit => {
    unitEl = document.createElement("option")
    unitEl.innerText = unit
    unitEl.value = unit
    
    timeUnitSelect.appendChild(unitEl)
});

//For every keypress check the salary value
document.body.addEventListener("keyup", ()=>{
    if (timerIsOn == false)
    salary = salaryInputEl.value
})
//Start that uses interval for timer, formats seconds to also shows deciseconds and updates element
startButton.addEventListener("click", ()=> { 
    if (timerIsOn == false && salary != 0){
        timerIsOn = true
        if (timerIsOn = true){
            timerInterval = setInterval(function(){

                timeIn10th = timeIn10th + 0.1
                timeInSeconds = timeIn10th
                timeDisplay.innerText = timeInSeconds.toFixed(1) + "s"
                moneyDisplay.innerText = (salary / (amountOfSeconds) * timeInSeconds).toFixed(2) + " kr"
            },100)
        }
    }
    //Catch Empty Input, display message
    else console.log("Timer is already on, stop or reset? Input your salary please.")

    if (errorIsDisplayed == false){
        inputContainerDiv.appendChild(inputEmptyErEl)
        errorIsDisplayed = true
    }
    if (errorIsDisplayed == true && salary != 0){
        inputContainerDiv.removeChild(inputEmptyErEl)
        errorIsDisplayed = false
    }

    
}) //Did you know that not inluding the term function (or the short hand ()=> here fires the event on page load?

//Stop Timer
stopButton.addEventListener("click", function stopTimer() {
    if (timerIsOn == true){
        clearInterval(timerInterval);
        timerIsOn = false
    }
    else{
        console.log("Timer is not on and therefore can't be stopped")
    }
    
})
//Reset Timer
resetButton.addEventListener('click', ()=>{
    try{
        if (timerIsOn == true || timerIsOn == false)
            clearInterval(timerInterval)
            timeDisplay.innerText = timePlaceHolder
            moneyDisplay.innerText = 0 + " kr"
        
            timerIsOn = false
            setTime()
    } catch (error){
        //Error Response
        console.error('An error occured when resetting timer', error.message)
    }
    
})




