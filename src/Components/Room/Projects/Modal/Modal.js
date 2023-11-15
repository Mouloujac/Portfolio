import React, { useState, useEffect } from "react";

import "./Modal.css";

function Modal(props) {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [technos, setTechnos] = useState([]);
  const [lien, setLien] = useState(null);

  useEffect(() => {
    if (props.selectedProject) {
      setTitle(props.selectedProject.title);
      setContent(props.selectedProject.content);
      setTechnos(props.selectedProject.technos);
      setLien(props.selectedProject.lien);
    }
  }, [props.selectedProject]);

  return (
    <>
      <div id="modal-container"  className={`${props.isExpanded ? 'firstModal' : 'out'}`}>
        <div className="modal-background">
            <div className="modal" onClick={props.onClick}>
                <div className="description">
                    <div className="imgContainer">  
                        
                          <img src="" className="imgProject" alt="icons"></img>
                        
                    </div>
                    <h2 className="projectType">Projet de fin d'études..</h2>
                    <h2 className="projectTitle">{title}</h2>
                    <p>{content}</p>
                </div>
                <div className="technos">
                    {technos.map((techno, index) => (
                      <img key={index} className="icons" src={`./${techno}.svg`} alt="icons"></img>
                    ))}
                </div>
                {lien && (
                  <a className="link" href={lien} target="_blank" rel="noopener noreferrer">
                    Lien Github
                  </a>
                )}
            </div>
        </div>    
      </div>
    </>
  );
}

export default Modal;
