const addNumberToLS = () =>{
    const number = Math.ceil(Math.random()*100);
    // console.log(number);
    localStorage.setItem("Number", number);
}
const setObjectToLS = () => {
    const customer={
        name: "John Doe",
        age: 30,
        city: "New York",
        product: 3
    }
    localStorage.setItem("customer", JSON.stringify(customer));
}

const getNumberFromLS = () => {
    const number = localStorage.getItem("Number");
    console.log("From saved local storage", number);
}

const getObjectFromLS = () => {
    const customerString = JSON.parse(localStorage.getItem("customer"));
    console.log("Object From LS", customerString);
}

const handleAddProduct = () => {
  console.log("Add Product Clicked");
  const product1 = document.getElementById("product");
  const quantity1 = document.getElementById("quantity");
  const product = product1.value;
  const quantity = quantity1.value;
  const cart = { product, quantity };
    product1.value = "";
    quantity1.value = "";
  localStorage.setItem("Cart", JSON.stringify(cart));
    const showcart = JSON.parse(localStorage.getItem("Cart"));
    viewCart(showcart);
};

const viewCart = (cart) => {
  const viewCart = JSON.parse(localStorage.getItem("Cart"));
  console.log("Cart from LS", viewCart.product);

  const ul = document.getElementById("cartItems");
  const li = document.createElement("li");
  li.innerText = `Product: ${cart.product} - Quantity: ${cart.quantity}`;
  ul.appendChild(li);
};
