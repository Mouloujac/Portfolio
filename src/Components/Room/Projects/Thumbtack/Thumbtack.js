import React from "react";

import "./Thumbtack.css"

function Thumbtack(props) {
  return (
    <>
        <div className="thumbtack" id={props.id}>
            <div className="thumbtack-shadow">
                <div className="thumbtack-front"></div> 
            </div>
            <div className="thumbtack-back">      
            </div>
            <div className="thumbtack-needle"> 
            </div>
        </div>

    </>
  );
}

export default Thumbtack;
