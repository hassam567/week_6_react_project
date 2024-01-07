// ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details using the ID from the API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
  
    </div>
  );
}

export default ProductDetail;
