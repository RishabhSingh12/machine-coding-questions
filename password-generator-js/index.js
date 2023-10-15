const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");

//getting user selections
const includeUpperCaseElement = document.getElementById("includeUpperCase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");

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
