import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product details using the ID from the API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleGoBack = () => {
    // Navigate back to the home page
    navigate("/");
  };

  return (
    <div style={{ fontFamily: "Salsa, cursive" }}>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Single Product Details</h1>
      <div className="card d-flex flex-column justify-content-center align-items-center" style={{ padding: "50px", marginTop: "30px", marginLeft: "230px", marginRight: "230px" }}>
        <img src={product.image} alt="Image not found" style={{ width: "200px", height: "200px", marginBottom: "30px" }} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
      </div>
      <div style={{ marginLeft: "230px", marginTop: "20px" }}>
        <button onClick={handleGoBack}>Click to go back to the home page</button>
      </div>
    </div>
  );
}

export default ProductDetail;
