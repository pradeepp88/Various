
// Global Variables 
var timer = null;
var btnStop = null;
var btnReset = null;

const initControls = function () {
 
    btnStart = document.querySelector('#btnStart');
    btnStop = document.querySelector('#btnStop');
    btnReset = document.querySelector('#btnReset');
}

// Event Handlers
const setupHandlers = function () {

    btnStart.onclick = function() { console.log('start timer: ' + new Date().toLocaleTimeString())};
    btnStop.onclick = function() { console.log('end timer: ' + new Date().toLocaleTimeString())};
    btnReset.onclick = function() { console.log('reset button clicked')};
}


// Window Events

window.addEventListener('load', function () {
    console.log('window loaded..');
    initControls();
    setupHandlers();
})