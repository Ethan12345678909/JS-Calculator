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

}

function mathButPress(operator) {

}

function equalButPress() {

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