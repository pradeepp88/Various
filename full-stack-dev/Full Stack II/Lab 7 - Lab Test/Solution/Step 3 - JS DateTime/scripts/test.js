
// Global Variables 
var btnStart = null;
var btnStop = null;
var btnReset = null;
var startTime = null;
var endTime = null;

const initControls = function () {
 
    btnStart = document.querySelector('#btnStart');
    btnStop = document.querySelector('#btnStop');
    btnReset = document.querySelector('#btnReset');
}

// Event Handlers
const setupHandlers = function () {

    btnStart.onclick = startTimer;
    btnStop.onclick = stopTimer;
    btnReset.onclick = resetTimerValues;
}

// Date & Time Logic
const getDisplayTime = function (date) {
    return date.toLocaleTimeString();
}
const startTimer = function () {
    resetTimerValues();

    startTime = new Date();
    const displayStart = getDisplayTime(startTime);
    console.log('start timer: ' + displayStart);
}

const resetTimerValues = function() {
    endTime = null;
}
const stopTimer = function () {

    endTime = new Date();
    const displayEndTime = getDisplayTime(endTime);
    console.log('end timer: ' + displayEndTime);

    calculateDuration(endTime);
}

const calculateDuration = function(currentDate) {
    var millisec = Math.abs(currentDate - startTime);
    var seconds = Math.ceil((millisec / 1000).toFixed(2));
   
    var minutes = Math.floor((millisec / (1000 * 60)).toFixed(1));

    if(seconds > 60) // calculate offset
        seconds = seconds - (minutes * 60);

    const duration = "Duration => minutes: " + minutes + " " + "seconds: " + seconds;
    console.log(duration);
}


// Window Events
window.addEventListener('load', function () {
    console.log('window loaded..');
    initControls();
    setupHandlers();
})