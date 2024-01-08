// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CategoryDetail from './Category';
import Card from './Card';
import ProductDetail from './SingleProductDetail';
import TestCard from './TestCard';

function App() {
  const [products, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProductData(res.data);

      const uniqueCategories = [...new Set(res.data.map((product) => product.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <Routes>
        <Route path='/test-card' element={<TestCard />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/category/:category"
          element={<CategoryDetail products={products} selectedCategory={selectedCategory} />}
        />
        <Route
          path="/"
          element={
            <>
              <div className="col-md-12">
                <h1
                  className="text-center card"
                  style={{
                    marginTop: '30px',
                    marginLeft: '20px',
                    marginRight: '20px',
                    padding: '60px',
                    background: '#01E37F',
                    height: '200px',
                    color: '#FF0000',
                    fontFamily: "Salsa,cursive"
                  }}
                >
                  Shop Items List
                </h1>
              </div>

              <div className="container-fluid" style={{ height: '500px', marginTop: '100px' }}>
                <div className="d-flex flex-row">
                  {/* Sidebar with category list */}
                  <div className="col-md-2 card" style={{ height: '200px', marginLeft: '100px' }}>
                    <div className='card' style={{ textAlign: 'center', fontFamily: "Salsa,cursive", backgroundColor: "#F7F7F7" }}>
                      <h2>Categories</h2>
                    </div>
                    <div className=' card p-1'>
                      <ul className='list-group card' style={{ margin: '30px', listStyle: 'none', fontFamily: "Salsa,cursive", backgroundColor: "#F7F7F7" }}>
                        {categories.map((category, index) => (
                          <li
                            className='list-group-item'
                            style={{ marginBottom: '10px' }}
                            key={index}
                            onClick={(event) => handleCategoryClick(category, event)}
                          >
                            <Link style={{ textDecoration: 'none' }} to={{ pathname: `/`, search: `category=${category}` }}>
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Main content */}

                  <div className="col-md-9" style={{ marginLeft: '0px' }}>
                    <h2 className=' card' style={{ marginTop: '0px', marginBottom: '20px', textAlign: "center", backgroundColor: "#F7F7F7", padding: "15px", marginLeft: "100px", marginRight: "50px", fontFamily: "Salsa,cursive" }}>Featured Products</h2>
                    {/* Product cards displayed to the right of the category sidebar */}
                    <div className="d-flex flex-wrap" style={{ paddingTop: '0px', marginLeft: '100px', marginBottom: '30px' }}>

                      {products
                        .filter((product) => !selectedCategory || product.category === selectedCategory)
                        .map((product, index) => (
                          <div key={index} className="col-12 col-md-4 mb-4">

                            <Card productData={product} />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
