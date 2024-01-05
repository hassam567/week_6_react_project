import logo from './logo.svg';
import Card from './Card';
import axios from "axios";
import { useEffect, useState } from 'react';
import './style.css'; // Import your CSS file for styling if needed
import ProductDetail from "./SingleProductDetail"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
 

    
 const [products, setProductData] = useState([]);

 useEffect(() => {
   axios.get("https://fakestoreapi.com/products").then((res) => {
     setProductData(res.data);
   });
 }, []);
return (
   <Router>
     <Routes>
       <Route path="/product/:id" element={<ProductDetail />} />

       <Route path="/" element={
         <div>
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

           <div className='card-container' style={{ padding: "100px" }}>
             {products.map((product, index) => (
               <Card key={index} productData={product} />
             ))}
           </div>
         </div>
       } />
     </Routes>
   </Router>
 );
}

export default App;
