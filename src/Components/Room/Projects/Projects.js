import React from "react";
import "./Projects.css";
import { useState } from "react";

import Modal from "./Modal/Modal";
import Data from "../../../Data/Projects.json"
import Document from "./Document/Document";
import DocumentSecond from "./Document/DocumentSecond";
import DocumentThird from "./Document/DocumentThird";

function Projects (){
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    

    const handleDocumentClick = (projectId) => {
        
        if(isExpanded === false){
            setIsExpanded(!isExpanded);
            
            
        }else{
            setIsExpanded(!isExpanded);
    
        }
        const project = Data.projects.find((item) => item.id === projectId);
        setSelectedProject(project);
        
    }


    return (
        <>
            <div className="projects">
                <div className="projects-board"></div>
                <div className="projects-board-int"></div>
                <div className="projects-board-ext"></div>
                <div className="shadow-right"></div>
                <div className="shadow-down"></div>
                <div className="shadow-up"></div>
                <div className="shadow-left"></div>
                <div className="project first" >
                    <Document  isExpanded={isExpanded} />
                </div>
                <div className="firstShadow" onClick={() => handleDocumentClick(1)}></div>
                <div className="firstShadowBack"></div>
                <div className="project second">
                    <DocumentSecond />
                </div>
                <div className="secondShadow" onClick={() => handleDocumentClick(2)}></div>
                <div className="secondShadowBack"></div>
                <div className="project third">
                    <DocumentThird />  
                </div>
                <div className="thirdShadow" onClick={() => handleDocumentClick(3)}></div>
                <div className="thirdShadowBack"></div>
            </div>
            <Modal isExpanded={isExpanded} onClick={handleDocumentClick} selectedProject={selectedProject}/>

        </>
    )
}
export default Projects;