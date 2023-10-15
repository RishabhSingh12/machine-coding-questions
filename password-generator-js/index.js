const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");

//getting user selections
const includeUpperCaseElement = document.getElementById("includeUpperCase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");

//getting char codes
const LOWER_CASE_CODES = arrayFromLowToHigh(65, 90);
const UPPER_CASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);

//for symbol char codes
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}

const form = document.getElementById("passwordGeneratorForm");
//submitting the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(LOWER_CASE_CODES);
  //getting the user selected length for the password
  const characterAmount = characterAmountNumber.value;

  //getting state of user selections
  const includeUpperCase = includeUpperCaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;

  const password = generatePassword(
    characterAmount,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
});

//logic for generating password
function generatePassword(
  characterAmount,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {}

//function for generating arrays from ascii codes
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i < high; i++) {
    array.push(i);
  }
  return array;
}
