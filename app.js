// Selectors
const convertBtn = document.querySelector("#convert-btn");
const currency = document.querySelector("#currency");

// Functions
// Get Rates Function
const getRates = (e) => {
  console.log("test");
  e.preventDefault();
  currencyCalculation();
};

// Currency Calculation Function
const currencyCalculation = () => {
  // Grab Currency Select value
  const currency = document.querySelector("#currency").value;
  //   Grab Amount value
  let amount = document.querySelector("#amount").value;
  //   Grab Price Display span
  let price = document.querySelector("#price");
  //   Fetch Rates from API:
  fetch(`https://blockchain.info/tobtc?currency=${currency}&value=${amount}`)
    .then((response) => response.json())
    .then((data) => {
      // Display Price
      price.innerHTML = `${data}`;
    });
};
// Event Listeners
convertBtn.addEventListener("click", getRates);
currency.addEventListener("change", currencyCalculation);
