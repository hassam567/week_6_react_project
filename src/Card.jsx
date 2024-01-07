import React, { useState } from "react";

function Card({ productData }) {
  const { id, title, price, description, image, category } = productData;
  const maxLength = 50;

  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expansion state
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate or display the full description
  const renderDescription = () => {
    if (isExpanded) {
      return description;
    }
    return truncateDescription(description, maxLength);
  };

  // Function to truncate the description
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " ...";
    }
    return text;
  };

  return (
    <div className="card " style={{ height: isExpanded ? "auto" : "500px", width: "300px", backgroundColor: "#F7F7F7", marginLeft: "0px", marginRight: "0spx" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "30%", marginTop: "30px", textDecoration: "none" }} onClick={() => { if (!isExpanded) window.location.href = `/product/${id}`; }}>
        <img className="card-img" src={image} alt="not found" style={{ width: "40%", height: "100%", mixBlendMode: "multiply" }} />
      </div>

      <br />
      <br />

      <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginLeft: "20px", marginRight: "20px" }}>
        <div style={{ textDecoration: "none" }} onClick={() => { if (!isExpanded) window.location.href = `/product/${id}`; }}>
          <b><p style={{ fontSize: "15px", color: "#000000" }}>{title}</p></b>
        </div>
        <p style={{ fontSize: "15px", cursor: "pointer", color: "#000000", textAlign: "justify" }} onClick={toggleExpansion}>
          {renderDescription()}
        </p>
        <div style={{ textDecoration: "none" }} onClick={() => { if (!isExpanded) window.location.href = `/product/${id}`; }}>
          <p style={{ fontSize: "15px", color: "#000000" }}>{category}</p>
          <p style={{ fontSize: "15px", color: "#000000" }}>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
