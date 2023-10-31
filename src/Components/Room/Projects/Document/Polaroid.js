import React, { useState } from "react";
import "./Document.css"

function Polaroid(props) {
  
  const [showText, setShowText] = useState(false);

  
  
  return (
    <div className={`${props.isExpanded ? 'polaroid-expanded' : 'polaroid'}`} id={`${props.isExpanded ? '' : props.id}`} >
      <div className={`${props.isExpanded ? 'photo-expanded' : 'photo'}`} ></div>
      <div className="scotch up"></div>
      <div className="scotch down"></div>
      {props.isExpanded && (
        <>
        {/* <div className="close" ></div> */}
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
