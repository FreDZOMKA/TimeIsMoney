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

//Create Variables
let timePlaceHolder = 0 + " seconds"
const salary = 30000 //kr per hours lets say
timerIsOn = false
let timeIn100th

function setTime(){
    timeIn100th = 0
}
setTime()

//Assign attributes to elements
timeDisplay.innerText = timePlaceHolder
moneyDisplay.innerText = salary + " coins"
salaryInputEl.placeholder = "inputSalaryElement"

ContainerDiv.appendChild(timeDisplay)
ContainerDiv.appendChild(moneyDisplay)
ContainerDiv.appendChild(salaryInputEl)


//Function for elements
//Start that uses interval for timer, formats seconds to also shows deciseconds and updates element
startButton.addEventListener("click", ()=> { 
    if (timerIsOn == false){
        timerIsOn = true
        if (timerIsOn = true){
            timerInterval = setInterval(function(){

                timeIn100th = timeIn100th + 1
                timeInSeconds = Math.floor(timeIn100th) / 10
                timeDisplay.innerText = timeInSeconds + " seconds"
                moneyDisplay.innerText = salary / (720*3600) * timeInSeconds
            },100)
        }
    }
    else console.log("Timer is already on, stop or reset?")
    
    
    
}) //Did you know that not inluding the term function (or the short hand ()=> here fires the event on page load?

stopButton.addEventListener("click", function stopTimer() {
    clearInterval(timerInterval);
    timerIsOn = false
})

resetButton.addEventListener('click', ()=>{
    clearInterval(timerInterval)
    timeDisplay.innerText = timePlaceHolder
    timerIsOn = false
    setTime()
})




