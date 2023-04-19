import validateInputs from "../utils/validate-input.js";
class ErrorService {
  constructor() {
    this.errorBox = document.querySelector("#error");
  }

  hideError = () => {
    this.errorBox.classList.add("invisible");
  };

  showError = () => {
    this.errorBox.classList.remove("invisible");
  };

  showErrorMessage = (inputs, inputNumber) => {
    const fullErrorMessage = inputs.reduce((msg, str, index) => {
      if (validateInputs(inputNumber[index])) {
        msg += "";
      } else {
        msg += `${str} is not a number`;
      }
      return msg;
    }, "");
    this.errorBox.innerText = fullErrorMessage;
    this.showError();
  };
}

export default ErrorService;
