import React, { useState, useEffect } from "react";

import "./Modal.css";

function Modal(props) {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (props.selectedProject) {
      setTitle(props.selectedProject.title);
      setContent(props.selectedProject.content);
    }
  }, [props.selectedProject]);

  return (
    <>
      <div id="modal-container"  className={`${props.isExpanded ? 'firstModal' : 'out'}`}>
        <div className="modal-background">
            <div className="modal" onClick={props.onClick}>
                <div className="description">
                    <div className="imgContainer">
                        <img src="./Proto-site.png" className="imgProject" alt="icons"></img>
                    </div>
                    <h2 className="projectType">Projet de fin d'études..</h2>
                    <h2 className="projectTitle">{title}</h2>
                    <p>{content}</p>
                    
                </div>
                    <div className="technos">
                        <img className="icons" src="react.svg" alt="icons"></img>
                        <img className="icons" src="laravel.svg" alt="icons"></img>
                        <img className="icons" src="css.svg" alt="icons"></img>
                    </div>
                    <a className="link" href="google.com">Lien Github</a> 
                
                </div>
        
          
        </div>    
           
      </div>
    </>
  );
}

export default Modal;
