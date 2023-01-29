import faker from "faker";

let products = "";

for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

const productListDiv = document.querySelector('#dev-products');
productListDiv.innerHTML = products;
