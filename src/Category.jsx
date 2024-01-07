// Category.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryDetail() {
  const { category } = useParams();
  const [products, setProducts] = useState(null); // Set initial state to null

  useEffect(() => {
    console.log("Category:", category);

    // Fetch category details using the category from the URL
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Data:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setProducts([]); // Set products to an empty array in case of an error
      });
  }, [category]);

  if (!products) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return <p>No products found for this category.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>Title: {product.title}</h2>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryDetail;
