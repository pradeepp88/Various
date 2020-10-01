function displayMessage(message) {
  if (message === null) {
    console.log("message is null");
  } else if (message === "") {
    console.log("message is empty");
  } else {
    console.log(message);
  }
}

var promptUser = function() {
  var message = window.prompt("Enter a message to display");
  displayMessage(message);
}

promptUser();
