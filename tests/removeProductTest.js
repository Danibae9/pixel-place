const basketProducts = [
    { id: 1, name: 'Product 1', price: 10, qt: 1 },
    { id: 2, name: 'Product 2', price: 20, qt: 3 },
    { id: 3, name: 'Product 3', price: 10, qt: 1 }
]

const removeProduct = (product) => {
    const tempBasket = basketProducts.filter(item => {
        if (item.id === product.id && item.qt > 1) {
            item.qt -= 1; // Decreasing the quantity if more than one of the same product
            return true; // Keeping the product in the basket
        }
        return item.id !== product.id; // Filtering out the product to be removed
    });
    console.log('Basket after removing product:', tempBasket); // Output the basket after removal
};

// Test 1: Remove a product with quantity equal to 1
console.log('Test 1:');
removeProduct(basketProducts[0]);
//Expect output [{ id: 2, name: 'Product 2', price: 20, qt: 3 },
//{ id: 3, name: 'Product 3', price: 10, qt: 1 }]

// Test 2: Remove a product with quantity greater than 1
console.log('Test 2:');
removeProduct(basketProducts[1]); 
//Expect output [{ id: 1, name: 'Product 1', price: 10, qt: 1 },
//{ id: 2, name: 'Product 2', price: 20, qt: 2 },
//{ id: 3, name: 'Product 3', price: 10, qt: 1 }]
