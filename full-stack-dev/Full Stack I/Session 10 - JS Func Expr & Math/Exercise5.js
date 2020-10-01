//Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

function calculator(num1, operator, num2) {
  if (!isNaN(num1) || !NaN(num2)) {
    return "Enter numbers only!";
  }
  if (operator == "+") return num1 + num2;
  if (operator == "-") return num1 - num2;
  if (operator == "*") return num1 * num2;
  if (operator == "/" && num2 != 0) return num1 / num2;
  else return "Can't divide by 0!";
}

calculator(2, "+", 2); //=> 4
calculator(2, "*", 2); // => 4
calculator(4, "/", 2); // => 2
calculator(4, "/", 0); // => 'Can't divide by 0!""
calculator(10, "-", 5); // => 5
calculator(true, "+", 5); // => "Enter numbers only!"
calculator(10, "+", "asdf"); // => "Enter numbers only!"
