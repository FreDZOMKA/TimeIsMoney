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
const timeUnitOptionEl = document.querySelector('#timeUnitSelect')

//Create Variables
let timePlaceHolder = 0 + "s"
let timerIsOn = false
let timeIn10th
let salary = 0
const inputEmptyErEl = document.createElement("p")
let errorIsDisplayed = false
let timerInterval

function setTime(){
    timeIn10th = 0
}
setTime()

//Assign attributes to elements
timeDisplay.innerText = timePlaceHolder
moneyDisplay.innerText = salary + " kr"

salaryInputEl.placeholder = "Input your Salary"
salaryInputEl.setAttribute("id", "userSalary")
salaryInputEl.setAttribute("type", "number")

numberItemsDiv.appendChild(timeDisplay)
numberItemsDiv.appendChild(moneyDisplay)

inputContainerDiv.appendChild(salaryInputEl)

inputEmptyErEl.textContent = 'Input income to start timer.'
inputEmptyErEl.setAttribute('class', 'redText')


//Functions for elements

//For every keypress check the salary value
document.body.addEventListener("keyup", ()=>{
    if (timerIsOn == false)
    salary = salaryInputEl.value
    console.log(salary)
})
//Check Time Unit Option
timeUnitOptionEl.addEventListener('click', ()=>{
    console.log('Time Unit Option Clicked')
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
                moneyDisplay.innerText = (salary / (86400) * timeInSeconds).toFixed(3) + " kr"
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




