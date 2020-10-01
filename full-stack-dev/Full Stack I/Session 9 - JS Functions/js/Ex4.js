function addNumbers(x, y) {
  return parseInt(x) + parseInt(y);
}

function subtractNumbers(x, y) {
  return parseInt(x) - parseInt(y);
}

function handleOperation(result, num1, num2) {
  switch (result) {
    case "add":
      addNumbers(x, y);
      break;
    case "subtract":
      subtractNumbers(x, y);
      break;
    default:
      console.log("Unknown operation entered!");
  }
}
function promptUser() {
  var result = window.prompt("Would you like to add or subtract?");
  var x = window.prompt("Enter the first number");
  var y = window.prompt("Enter the second number");

  handleOperation(result, x, y);
}

promptUser(); //INVOKE!!!!
