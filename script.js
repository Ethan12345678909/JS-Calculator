let preVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
// store whether or not decimal was clicked
// only allow one decimal per value
let decimalClicked = false
// hold values we want stored in memory
let valMemStored = ''

function numButPress(num) {
    //if a number has already been placed
 if (resultVal) {
    // start a new number
    newVal = num
    // reset to create a new result
    resultVal = ''
 } else {
    //used to block multiple decimals
    if (num === '.') {
        if (decimalClicked != true){
            //take current value of new value and add character pressed
            newVal += num
            decimalClicked = true
        }
 }      else {
    newVal += num
 }
}
//update the display
document.getElementById('entry').value = newVal
}

function mathButPress(operator) {
    // if no value from prev equation, move it over
if (!resultVal) {
    preVal = newVal
}
else {
    //current result is stored as prev value
    preVal = resultVal
}
//restart to create a new number
newVal = ''
//reset decimal clicked
decimalClicked = false
//store operator clicked
mathOperator = operator
//prepare entry for recieving new number
resultVal = ''
document.getElementById('entry').value = ''
}

function equalButPress() {
decimalClicked = false
preVal = parseFloat(preVal)
newVal = parseFloat(newVal)

//perform calcs based on op
switch (mathOperator) {
    case "+":
        resultVal = preVal + newVal
        break
    case "-":
        resultVal = preVal - newVal
        break
    case "*":
        resultVal = preVal * newVal
        break
    case "/":
        resultVal = preVal / newVal
        break
    
        default:
             resultVal = newVal
}
preVal = newVal

document.getElementById('entry').value = resultVal
}

//clears everything EXCEPT memory
function clearButPress() {
preVal = ''
newVal = ''
resultVal = ''
mathOperator = ''
decimalClicked = false
document.getElementById('entry').value = '0'
}

//to store the current value in entry in val mem stored
function copyButPress() {
valMemStored = document.getElementById('entry').value
}

//if a value has been stored, paste it in entry window and assign it as new val. 
function pasteButPress() {
if (valMemStored) {
    document.getElementById('entry').valMemStored
    newVal = valMemStored
}
}