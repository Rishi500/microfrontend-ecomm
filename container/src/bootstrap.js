import { mount as mountProduct } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";
console.log("container");
const productSectionEl = document.querySelector("#section-products");
mountProduct(productSectionEl);

const cartSectionEl = document.querySelector("#section-carts");
mountCart(cartSectionEl);
