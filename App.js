import React, { useState } from 'react'; // Importing React and useState hook
import './App.css'; // Importing CSS file for styling
import Header from './components/header'; // Importing Header component
import ImageGrid from './components/imageGrid'; // Importing ImageGrid component
import MiddleSection from './components/middlesection'; // Importing MiddleSection component
import listProducts from './components/products'; // Importing list of products

function App({}) {
  // State for platform filter
  const [platformFilter, setPlatformFilter] = useState('');

  // Filtering products based on platform selection
  const filteredProducts = platformFilter
    ? listProducts.filter(product => product.platform === platformFilter)
    : listProducts;

  // State for basket products
  const [basketProducts, setBasketProducts] = useState([]);

  // State for list of users (unused in this code)
  const [listUsers, setListUsers] = useState([]);

  // Rendering the App component
  return (
    <div className='App'>
      {/* Header component with necessary props */}
      <Header 
        basketProducts={basketProducts} 
        setBasketProducts={setBasketProducts} 
        listUsers={listUsers} 
        setListUsers={setListUsers} 
        platformFilter={platformFilter}
      />
      {/* MiddleSection component with necessary props */}
      <MiddleSection 
        basketProducts={basketProducts} 
        setBasketProducts={setBasketProducts} 
        setPlatformFilter={setPlatformFilter}
      />
      {/* ImageGrid component with necessary props */}
      <ImageGrid  
        basketProducts={basketProducts} 
        setBasketProducts={setBasketProducts} 
        filteredProducts={filteredProducts}
      />
    </div>
  );
}

export default App; // Exporting the App component

