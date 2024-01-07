import logo from './logo.svg';
import Card from './Card';
import axios from "axios";
import { useEffect, useState } from 'react';
import './style.css'; // Import your CSS file for styling if needed
import ProductDetail from "./SingleProductDetail"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CategoryDetail from './Category'

function App() {

  const [products, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProductData(res.data);

      // Extracting unique categories from the product data
      const uniqueCategories = [...new Set(res.data.map(product => product.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<CategoryDetail />} />

        <Route path="/" element={
          <>
            <div className="container-fluid">
              <div className="row">
                {/* Sidebar with category list */}
                <div className="col-md-2 sidebar card" style={{ height: "400px", marginTop: "380px", padding: "16px", marginLeft: "20px" }}>
                  <div style={{ textAlign: "center", marginTop: "px" }}>
                    <h2>Categories</h2>
                  </div>
                  <ul>
                    {categories.map((category, index) => (
                      <li key={index}><Link to={`/category/${category}`}>{category}</Link></li>
                    ))}
                  </ul>
                </div>

                {/* Main content */}
                <div className="col-md-10" style={{ marginLeft: "-20px" }}>
                  <h1 className='text-center card' style={{
                    marginTop: "70px",
                    marginLeft: "100px",
                    marginRight: "120px",
                    padding: "60px",
                    background: "#01E37F",
                    height: "200px",
                    color: "#FF0000",
                    fontFamily: "Smooch Sans, sans-serif, Roboto, sans-serif"
                  }}>Shop Items List</h1>

                  <div className='d-flex flex-wrap' style={{ paddingTop: "100px", marginLeft: "30px" }}>
                    {products.map((product, index) => (
                      <div key={index} className="col-12 col-md-4 mb-4">
                        <Card productData={product} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
