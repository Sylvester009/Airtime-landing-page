const countrySelect = document.getElementById("countrySelect");
const numberInput = document.getElementById("number");
const amountInput = document.getElementById("amount");

// Disable number input by default
numberInput.disabled = true;
amountInput.disabled = true;

// Enable number input when a country is selected
countrySelect.addEventListener("change", () => {
  numberInput.disabled = countrySelect.value === "";
  amountInput.disabled = countrySelect.value === "";
});

// Fetch list of countries
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countrySelect = document.getElementById("countrySelect");
    data.forEach((country) => {
      const option = document.createElement("option");
      option.text = country.name.common;
      option.value = country.name.common;
      countrySelect.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching countries:", error));
