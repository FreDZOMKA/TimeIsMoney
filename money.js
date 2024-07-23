//Load Script
console.log("money.js script loaded")

//Get or create elements
const ContainerDiv = document.querySelector("#numberBox")
const timeDisplay = document.createElement("p")
const moneyDisplay = document.createElement("p")
const startButton = document.querySelector("#startButton")
const stopButton = document.querySelector("#stopButton")
const resetButton = document.querySelector('#resetButton')
const salaryInputEl = document.createElement('input')
const timeUnitOptionElement = document.getElementById('timeUnitSelect').innerHTML

//Create Variables
let timePlaceHolder = 0 + " seconds"
let timerIsOn = false
let timeIn100th
let salary

function setTime(){
    timeIn100th = 0
    salary = 0
}
setTime()

//Assign attributes to elements
timeDisplay.innerText = timePlaceHolder
moneyDisplay.innerText = salary + " coins"

salaryInputEl.placeholder = "Input your Salary"
salaryInputEl.setAttribute("id", "userSalary")

ContainerDiv.appendChild(timeDisplay)
ContainerDiv.appendChild(moneyDisplay)
ContainerDiv.appendChild(salaryInputEl)


//Functions for elements

//for every keypress check the salary value
document.body.addEventListener("keyup", ()=>{
    if (timerIsOn == false)
    salary = salaryInputEl.value
    console.log(salary)
})



//Start that uses interval for timer, formats seconds to also shows deciseconds and updates element
startButton.addEventListener("click", ()=> { 
    if (timerIsOn == false && salary != 0){
        timerIsOn = true
        if (timerIsOn = true){
            timerInterval = setInterval(function(){

                timeIn100th = timeIn100th + 1
                timeInSeconds = Math.floor(timeIn100th) / 10
                timeDisplay.innerText = timeInSeconds + " seconds"
                moneyDisplay.innerText = (salary / (86400) * timeInSeconds).toFixed(3) + " coins"
            },100)
        }
    }
    else console.log("Timer is already on, stop or reset? Input your salary please.")
    
    
    
}) //Did you know that not inluding the term function (or the short hand ()=> here fires the event on page load?

stopButton.addEventListener("click", function stopTimer() {
    clearInterval(timerInterval);
    timerIsOn = false
})

resetButton.addEventListener('click', ()=>{
    clearInterval(timerInterval)
    timeDisplay.innerText = timePlaceHolder
    moneyDisplay.innerText = 0 + " coins"

    timerIsOn = false
    setTime()
})




