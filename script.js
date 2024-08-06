function calculateMaturityAmount() {
  // To get input values from the form element
  const principle = parseFloat(document.getElementById("principle").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const tenure = parseFloat(document.getElementById("tenure").value);

  // To Perform the Calculations

  const maturityAmount = principle + (principle * interestRate * tenure) / 100;

  // To Display Result
  document.getElementById(
    "result"
  ).innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

// Attach an event listener to the Calculate Button
document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateMaturityAmount);
