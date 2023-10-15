const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

const form = document.getElementById("passwordGeneratorForm");

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}

//submitting the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const characterAmount = characterAmountNumber.value;

  const password = generatePassword(
    characterAmount,
    includeUpperCase,
    inckudeNumbers,
    includeSymbols
  );
});
