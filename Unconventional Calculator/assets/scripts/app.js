const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseFloat(usrInput.value);
}

function createAndWriteOutput(operator, resultBefore, calcNumber) {
  //convert number to a string implicitly
  const calDescription = `${resultBefore} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription); // from vendor.js file
}

function logEntriesList(op, initValue, entNumber, currResult) {
  //object is constructed key value pair, where key is a identifier and value stored in it
  const logEntry = {
    operation: `${op}`,
    prevResult: initValue,
    num: entNumber,
    result: currResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUB" &&
      calculationType !== "MUL" &&
      calculationType !== "DIV") ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUB") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MUL") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIV") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else {
    console.log("Invalid input");
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  logEntriesList(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUB");
}

function multiply() {
  calculateResult("MUL");
}

function divide() {
  calculateResult("DIV");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
