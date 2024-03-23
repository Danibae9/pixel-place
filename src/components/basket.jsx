import React from 'react'; // Importing React

// Basket component
function Basket({ basketProducts, setBasketProducts }) {
    let totalPrice = 0; // Initializing total variable

    // Calculating total price of products in the basket
    for (const item of basketProducts) {
        totalPrice = totalPrice + item.price * item.qt;
    }

    // Function to remove a product from the basket
    const removeProduct = (product) => {
        const tempBasket = basketProducts.filter(item => {
            if (item.id === product.id && item.qt > 1) {
                item.qt -= 1; // Decreasing the quantity if more than one of the same product
                return true; // Keeping the product in the basket
            }
            return item.id !== product.id; // Filtering out the product to be removed
        });
        setBasketProducts(tempBasket); // Updating basket products
    };
    // Rendering the Basket component
    return (
        <div>
            {/* Rendering basket only if there are products */}
            {basketProducts.length > 0 && 
                <div className='basketStyle' style={{background: "black"}}>
                    <div className="btnUser">
                        <img className="basketbtn" src="/images/basket.svg" alt="basket" />
                    </div>
                    {/* Rendering basket items */}
                    <ul className='basketList'>
                        {basketProducts.map((item, index) => (
                            <li key={index}>
                                {/* Displaying product details */}
                                {item.name} {item.platform} x{item.qt} £{item.price}
                                {/* Button to remove product */}
                                <button onClick={() => {removeProduct(item)}} className="Userbtn">
                                    <img src="/images/remove.svg" alt="remove" srcSet="" />
                                </button> 
                            </li>
                        ))}
                    </ul>
                    {/* Displaying total price */}
                    {basketProducts.length > 0 && 
                        <div className='basketList'>
                            Total: ${totalPrice}
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default Basket; // Exporting the Basket component
