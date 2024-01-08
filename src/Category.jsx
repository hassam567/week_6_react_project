// CategoryDetail.js
import React from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';

function CategoryDetail({ products, selectedCategory }) {
  const { category } = useParams();
  const filteredProducts = products.filter((product) => !selectedCategory || product.category === selectedCategory);

  return (
    <div className="d-flex flex-wrap" style={{ paddingTop: '0px', marginLeft: '100px', marginBottom: '30px' }}>
      {filteredProducts.map((product, index) => (
        <div key={index} className="col-12 col-md-4 mb-4">
          <Card productData={product} />
        </div>
      ))}
    </div>
  );
}

export default CategoryDetail;
