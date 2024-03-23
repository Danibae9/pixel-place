let basketProducts = [];

// Function to simulate setBasketProducts
const setBasketProducts = (products) => {
  basketProducts = products;
};

// Function to test
const addToBasket = (product) => {
  let productExists = false;
  
  // Checking if the product already exists in the basket
  for (let i = 0; i < basketProducts.length; i++) {
    if (basketProducts[i].id === product.id ) {
      // Increasing the quantity if the same product is found
      product.qt += 1;
      productExists = true;
      break;
    }
  }

  // If the product doesn't exist in the basket, add it
  if (!productExists) {
    setBasketProducts([...basketProducts, product]);
  } else {
    // If the product exists, update the state to trigger a rerender
    setBasketProducts([...basketProducts]);
  }
};


// Test 1: Add a new product to the basket
const product1 = { id: 1, name: 'Product 1', price: 10, qt: 1 };
addToBasket(product1);
console.log(basketProducts); // Expected output: [{ id: 1, name: 'Product 1', price: 10, qt: 1 }]

// Test 2: Increase quantity if the product already exists
addToBasket(product1);
console.log(basketProducts); // Expected output: [{ id: 1, name: 'Product 1', price: 10, qt: 2 }]

// Test 3: Add a new product to the basket
const product2 = { id: 2, name: 'Product 2', price : 20, qt: 1 };
addToBasket(product2);
console.log(basketProducts); // Expected output: [{ id: 1, name: 'Product 2', price: 10, qt:2}, { id: 2, name: 'Product 2', price: 20, qt: 1}]