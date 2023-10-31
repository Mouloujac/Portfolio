import React, { useState, useEffect } from "react";
import Polaroid from "./Polaroid";
import Thumbtack from "../Thumbtack/Thumbtack";
import "./Document.css";

function Document(props) {
 

  return (
    <>
      <img id="paper-clip" src={`${props.isExpanded ? './paper-clip.svg' : ''}`}></img>
      <img id="paper-clip-shadow" src={`${props.isExpanded ? './paper-clip-shadow.svg' : ''}`}></img>

      <div className='document-base' id="documentFirst">
            
      </div>
      <div id="modal-container" className={`${props.isExpanded ? 'firstModal' : ''}`}>
        <div class="modal-background">
          <div class="modal">
            <div className="description">
              <h2>Projet de fin d'études</h2>
              <h2>Site e-commerce</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit sed turpis non iaculis. Praesent efficitur ante in turpis tincidunt volutpat. Quisque sit amet augue congue, laoreet odio eget, rutrum ex. Vivamus commodo malesuada ligula vel condimentum. Sed imperdiet rutrum sapien ac aliquet. Nam eu lacus sem.</p>
              <div className="technos">
                <img className="icons" src="react.svg"></img>
                <img className="icons" src="laravel.svg"></img>
                <img className="icons" src="css.svg"></img>
              </div>
              <a>Lien Github</a>
            </div>
          </div>
          
          
        </div>        
      </div>
      <div className="document-corner"></div>

      
        <>
          <Thumbtack id="firstThumbTop" />
          <Thumbtack id="firstThumbBottom" />
        </>
    

      <Polaroid id="project-1"/>
    </>
  );
}

export default Document;
