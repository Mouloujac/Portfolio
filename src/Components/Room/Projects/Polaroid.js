import React, { useState } from "react";

function Polaroid() {
  const [isExpanded, setIsExpanded] = useState(false);
  

  const handlePolaroidClick = () => {
    if(isExpanded == false){
        setIsExpanded(!isExpanded);
        console.log("pola");
    }
  };

  const handleCloseClick = (e) => {
    setIsExpanded(false);
  };

  const polaroidStyle = isExpanded
    ? {
        width: "500px",
        height: "500px",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      }
    : {
        width: "50px",
        height: "50px",
        clipPath: "polygon(0 28%, 56% 8%, 55% 79%, 0% 100%)",
      };

const photoStyle = isExpanded
      ? {
        display: "none",
      }
      : {
        display: "block",
      };

  return (
    <div className="polaroid" style={polaroidStyle} onClick={handlePolaroidClick}>
      <div className="photo" style={photoStyle}></div>
      <div className="scotch up"></div>
      <div className="scotch down"></div>
      {isExpanded && (
        <div className="close" onClick={handleCloseClick} ></div>
      )}
    </div>
  );
}

export default Polaroid;
