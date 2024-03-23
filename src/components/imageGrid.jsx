import React from 'react'; // Importing React

// ImageGrid component
function ImageGrid({ filteredProducts, basketProducts, setBasketProducts }) {
  // Function to add a product to the basket
  const addToBasket = (product) => {
    let productExists = false;
    
    // Checking if the product already exists in the basket
    for (let i = 0; i < basketProducts.length; i++) {
      if (basketProducts[i].id === product.id ) {
        product.qt += 1; // Increasing the quantity if the same product is found
        productExists = true;
        break;
      }
    }
    // If the product doesn't exist in the basket, add it
    if (!productExists) {
      setBasketProducts([...basketProducts, product]);
    } else {
      setBasketProducts([...basketProducts]);
    }
  };

  // Rendering the ImageGrid component
  return (
    <div className="imageGrid">
      {/* Mapping through filtered products to display them in the image grid */}
      {filteredProducts.map((product, index) => (
        <div key={index} className="containerProduct">
          {/* Product name */}
          <h3>{product.name}</h3>
          {/* Product image */}
          <img className="image" src={product.img} alt={product.name} />
          {/* Product price */}
          <h3>£{product.price}</h3>
          {/* Button to add the product to the basket */}
          <button className="Userbtn" onClick={() => addToBasket(product)}>
            <img src="/images/addbasket2.svg" alt="addBasket" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid; // Exporting the ImageGrid component

