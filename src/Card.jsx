import React, { useState } from "react";

function Card({ productData }) {
  const { id, title, price, description, image, category } = productData;
  const titleMaxLength = 30;
  const descriptionMaxLength = 50;

  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expansion state
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate or display the full text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " ...";
    }
    return text;
  };

  // Function to render truncated or full text based on expansion state
  const renderTitle = () => {
    return truncateText(title, titleMaxLength);
  };

  const renderDescription = () => {
    return isExpanded ? description : truncateText(description, descriptionMaxLength);
  };

  return (
   
  
 

    <>
    
         
        <div className="card d-flex flex-column align-items-center justify-content-center" style={{ width: "18rem",fontFamily: "Salsa,cursive" }}>
          <div className="card d-flex flex-column align-items-center justify-content-center" style={{ height: "150px", width: "100%", background: "#F7F7F7" ,cursor:"pointer"}} onClick={() => { if (!isExpanded) window.location.href = `/product/${id}` }}>
            <img src={image} className="card-img" alt="Image not Found" style={{ width: "40%", height: "120px", mixBlendMode:"multiply" }} />
          </div>
    
          <div className="card-body">
            <h5 className="card-title" style={{cursor:"pointer"}} onClick={() => { if (!isExpanded) window.location.href = `/product/${id}` }}>{renderTitle()}</h5>
            <p className="card-text" onClick={toggleExpansion}>{renderDescription()}</p>
          </div>
    
          <div style={{ width: "100%" ,cursor:"pointer" }} onClick={() => { if (!isExpanded) window.location.href = `/product/${id}` }}>
            <ul className="list-group">
              <li className="list-group-item">{category}</li>
              <li className="list-group-item" style={{ backgroundColor: "#F7F7F7" }}>{price}</li>
            </ul>
          </div>
        </div>
        </>
      );
    
    




}

export default Card;
