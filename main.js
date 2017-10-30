var typeOfCalculator = prompt("Enter a for an advance calculator and b for a basic calculator");

var number1 = parseFloat(prompt("Enter first number: "));

if(typeOfCalculator == "a") {
  var operation = prompt("Type ^ for power and sqrt for square root");
} else if (typeOfCalculator == "b") {
  var operation = prompt("Type operation: +-*/");
} else {
  console.log("Invalid option.");
}

var answer;

switch (operation) {
  case "+":
  case "-":
  case "/":
  case "*":
  case "^":
    var number2 = parseFloat(prompt("Enter second number: "));
    switch (operation) {
      case "+":
        answer = number1 + number2;
        break;
      case "-":
        answer = number1 - number2;
        break;
      case "*":
        answer = number1 * number2;
        break;
      case "/":
        answer = number1 / number2;
        break;
      case "^":
        answer = Math.pow(number1, number2);
        break;
      default:
        break;
    }
    alert(number1 + " " + operation + " " + number2 + " = " + answer);
    break;
  case "sqrt":
    answer = Math.sqrt(number1);
    alert(" Square root of " + number1 + " = " + answer);
    break;
  default:
    break;
}
