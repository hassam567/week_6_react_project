import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ productData }) {
  const { id, title, price, description, image, category } = productData;
  const maxLength = 150;

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
    <>
      <div className="card" style={{ boxShadow: "10px", width: "300px", height: "830px", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#F7F7F7" }}>
        <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "30%", marginTop:"30px" }}>
            <img className="card-img" src={image} alt="not found" style={{ width: "70%", height: "100%" }} />
          </div>

          <div className="d-flex flex-column align-items-center" style={{ textAlign: "justify", margin: "0 20px" }}>
            <br />
            <br />
            <b style={{ fontWeight: "bold", fontSize: "20px", color: "#FF0000" }}>Title: </b>
            <p style={{ fontSize: "15px", color: "#000000" }}>{title}</p>

            <b style={{ fontWeight: "bold", fontSize: "20px", color: "#FF0000" }}>Description: </b>
            <p style={{ fontSize: "15px", cursor: "pointer", color: "#000000" }} onClick={toggleExpansion}>
              {renderDescription()}
            </p>

            <b style={{ fontWeight: "bold", fontSize: "20px", color: "#FF0000" }}>Category: </b>
            <p style={{ fontSize: "15px", color: "#000000" }}>{category}</p>

            <b style={{ fontWeight: "bold", fontSize: "20px", color: "#FF0000" }}>Price: </b>
            <p style={{ fontSize: "15px", color: "#000000" }}>{price}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
