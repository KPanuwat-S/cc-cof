class ComponentService {
  constructor() {
    this.priceInput = document.querySelector("#product-price");
    this.quantityInput = document.querySelector("#product-quantity");
    this.shippingInput = document.querySelector("#product-shipping");
    this.resultBox = document.querySelector("#result");
    this.totalBtn = document.querySelector("#total-btn");
  }

  getInputs() {
    let price = this.priceInput.value;
    let quantity = this.quantityInput.value;
    let shipping = this.shippingInput.value;
    return [price, quantity, shipping];
  }

  setPrice(price) {
    this.resultBox.innerText = price;
  }

  onClick(callback) {
    this.totalBtn.addEventListener("click", callback);
  }
}

export default ComponentService;
