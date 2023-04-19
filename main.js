// const priceInput = document.querySelector("#product-price");
// const quantityInput = document.querySelector("#product-quantity");
// const shippingInput = document.querySelector("#product-shipping");
// const resultBox = document.querySelector("#result");
// const errorBox = document.querySelector("#error");
// const totalBtn = document.querySelector("#total-btn");

// // Parse Input
// const parseInput = (...input) => {
//   return input.map((str) => Number(str));
// };

// //Validate Inputs
// const validateInputs = (...inputs) => {
//   return inputs.every((el) => typeof el === "number" && !isNaN(el));
// };

// // Hide Error
// const hideError = () => {
//   errorBox.classList.add("invisible");
// };
// hideError();

// const showError = () => {
//   errorBox.classList.remove("invisible");
// };

// // Customer Message
// const showErrorMessage = (inputs, inputNumber) => {
//   const fullErrorMessage = inputs.reduce((msg, str, index) => {
//     if (validateInputs(inputNumber[index])) {
//       msg += "";
//     } else {
//       msg += `${str} is not a number`;
//     }
//     return msg;
//   }, "");
//   errorBox.innerText = fullErrorMessage;
//   showError();
// };

// // Calculate Total
// const calTotal = () => {
//   hideError();
//   // get input
//   const inputs = [priceInput.value, quantityInput.value, shippingInput.value];
//   const inputNumber = parseInput(...inputs);
//   const validation = validateInputs(...inputNumber);
//   // validation ? inputNumber.reduce((acc, el) => acc + el, 0) : hideError();
//   if (validation) {
//     const [price, quanitity, shipping] = inputNumber;
//     const totalPrice = price + quanitity + shipping;
//     console.log(totalPrice);
//     resultBox.innerText = ` ${totalPrice}`;
//   } else {
//     showErrorMessage(inputs, inputNumber);
//   }
//   // parse input
//   // validate input
//   // pass : caltotal
//   // fail: show error
// };

// totalBtn.addEventListener("click", calTotal);
