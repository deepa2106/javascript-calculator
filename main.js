var typeOfCalculator = prompt("Enter a for an advance calculator and b for a basic calculator");

var number1 = parseFloat(prompt("Enter first number: "));

if(typeOfCalculator == "a") {
  var operation = prompt("Type ^ for power and sqrt for square root");
} else if (typeOfCalculator == "b") {
  var operation = prompt("Type operation: +-*/");
} else {
  console.log("Invalid option.");
}
