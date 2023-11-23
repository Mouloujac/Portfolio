import React, { useState, useEffect } from "react";

import "./Modal.css";

function Modal(props) {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [technos, setTechnos] = useState([]);
  const [lien, setLien] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    if (props.selectedProject) {
      setTitle(props.selectedProject.title);
      setContent(props.selectedProject.content);
      setTechnos(props.selectedProject.technos);
      setLien(props.selectedProject.lien);
      setImage(props.selectedProject.image);
      setType(props.selectedProject.type);
    }
  }, [props.selectedProject]);

  return (
    <>
      <div id="modal-container"  className={`${props.isExpanded ? 'firstModal' : 'out'}`}>
        <div className="modal-background">
            <div className="modal" onClick={props.onClick}>
              <div className={`${props.isExpanded ? 'modal-sun' : ''}`}></div>
                <div className="description">
                    <div className="imgContainer">  
                    
                      <img src={`${image}`} className="imgProject" alt="icons"></img>
                    
                    </div>
                    <h2 className="projectType">{type}</h2>
                    <h2 className="projectTitle">{title}</h2>
                    <p>{content}</p>
                    
                </div>
                {lien && (
                  <a className="link" href={lien} target="_blank" rel="noopener noreferrer">
                    <span>Lien Github</span>
                  </a>
                )}
                <div className="technos">
                    {technos.map((techno, index) => (
                      <img key={index} className="icons" src={`./${techno}.svg`} alt="icons"></img>
                    ))}
                </div>
            </div>
        </div>    
      </div>
    </>
  );
}

export default Modal;
