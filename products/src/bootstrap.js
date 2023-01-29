import faker from "faker";

// exporting mount, so that we can call mount with appropriate element from container.
export function mount(el) {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

/**
 * We have two scenarios, element with id `dev-products`, might only exist in the standalone products app but not in container app.
 */
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}

