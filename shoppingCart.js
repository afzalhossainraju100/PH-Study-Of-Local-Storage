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
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  console.log(product, quantity);
  const cart = { product, quantity };
  localStorage.setItem("Cart", JSON.stringify(cart));
};
const viewCart = () => {
  const viewCart = JSON.parse(localStorage.getItem("Cart"));
  console.log("Cart from LS", viewCart.product);
};

