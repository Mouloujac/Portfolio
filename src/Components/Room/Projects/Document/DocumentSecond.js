import React from "react";

import Polaroid from "./Polaroid";
import "./Document.css"

function DocumentSecond(props) {
  

  
  return (
    <>
        <div className="documentSecond-base">
            <div className="documentSecond-text">
                <p>Se lever</p> 
                <p>Boire un café</p> 
                <p>Boire un café</p>
                <p>....</p>
            </div>
        </div>
        <Polaroid id="project-2" /> 
        
    </>
  );
}

export default DocumentSecond;
