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
};