//creating a two differents baskets
const basketProducts = [{id: 1, name: 'Product 1', price: 10, qt: 1 }, { id: 2, name: 'Product 2', price : 20, qt: 1 }]
const basketProductsEmpty=[]
    let totalPrice = 0; // Initializing total variable

    // Calculating total price of products in the basket
    for (const item of basketProducts) {
        totalPrice = totalPrice + item.price * item.qt;
    }
    console.log('total for basketProducts:' + totalPrice)// Expect output total for basketProducts:30
    //Reset the value of totalPrice to 0
    totalPrice = 0
    // Calculating total price for a basketProductsEmpty
    for (const item of basketProductsEmpty){
        totalPrice = totalPrice + item.price * item.qt;
    }
    console.log('total for EmptyBasket:' + totalPrice)// Expect output total for EmptyBasket:0
    
