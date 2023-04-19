import parseInput from "./../utils/parse-input.js";
import validateInputs from "./../utils/validate-input.js";
import ComponentService from "./../services/component.services.js";
import ErrorService from "./../services/error.service.js";

const Component = new ComponentService();
const Error = new ErrorService();

Error.hideError();

const calTotal = () => {
  Error.hideError();
  const inputs = Component.getInputs();
  const inputNumber = parseInput(...inputs);
  const validation = validateInputs(...inputNumber);

  if (validation) {
    const [price, quanitity, shipping] = inputNumber;
    const totalPrice = price + quanitity + shipping;
    Component.setPrice(totalPrice);
  } else {
    Error.showErrorMessage(inputs, inputNumber);
  }
};

Component.onClick(calTotal);
