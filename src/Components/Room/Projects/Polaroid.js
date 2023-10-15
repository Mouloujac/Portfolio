import React, { useState } from "react";


function Polaroid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState(false);

  const handlePolaroidClick = () => {
    if(isExpanded == false){
        setIsExpanded(!isExpanded);

        if (!isExpanded) {
          setTimeout(() => {
            setShowText(true);
      
          }, 180);
          
        }
    }
  };
  
  const handleCloseClick = (e) => {
    setIsExpanded(false);
    setShowText(false);
  };

  
  return (
    <div className={`${isExpanded ? 'polaroid-expanded' : 'polaroid'}`} onClick={handlePolaroidClick}>
      <div className={`${isExpanded ? 'photo-expanded' : 'photo'}`} ></div>
      <div className="scotch up"></div>
      <div className="scotch down"></div>
      {isExpanded && (
        <>
        <div className="close" onClick={handleCloseClick} ></div>
        {showText && (
        <div className="polaroid-text">
          <div className="technos">
              <img className="icons" src="react.svg"></img>
              <img className="icons" src="laravel.svg"></img>
              <img className="icons" src="css.svg"></img>
          </div>
            <p className="title" >lorem ipsum es doloris</p>
            <div className="resume">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin suscipit dictum. Vivamus nec nulla eros. Proin blandit lacus in ipsum iaculis, vel convallis ex dictum. Morbi vel odio a velit gravida eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin suscipit dictum. Vivamus nec nulla eros. Proin blandit lacus in ipsum iaculis, vel convallis ex dictum. Morbi vel odio a velit gravida eleifend</p>
            </div>
            <a className="link" >Lien vers github</a>
        </div>
        )}
        </>
      )}
    </div>
  );
}

export default Polaroid;
