import {icpsInt,salaryInputEl} from "./money.js"


const moneyMadeInXElement = document.querySelector("#moneyMadeInXText")

let timeAmountElement = document.querySelector("#timeAmountInput")

salaryInputEl.addEventListener("input", UpdateIncomePerSecond2)
timeAmountElement.addEventListener("input", UpdateIncomePerSecond2)

function UpdateIncomePerSecond2(){
    let amountOfTime = timeAmountElement.value;
    //User inputs time in number
    let option = "hour"

    if (option == "hour"){
        amountOfTime = amountOfTime * 3600
        let moneyMadeInX = (amountOfTime * icpsInt).toFixed(0)
        moneyMadeInXElement.innerText = moneyMadeInX + (" kr")
    }
    console.log(amountOfTime + "seconds",moneyMadeInXElement)

}






