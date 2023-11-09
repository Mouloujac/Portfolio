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
        console.log(projectId);
        console.log(Data.projects);
        
        
        if(isExpanded == false){
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
                <div className="project first" onClick={() => handleDocumentClick(1)}>
                    <Document  isExpanded={isExpanded} />
                </div>
                <div className="project second" onClick={() => handleDocumentClick(2)}>
                    <DocumentSecond />
                </div>
                <div className="project third" onClick={() => handleDocumentClick(3)}>
                    <DocumentThird />  
                </div>
            </div>
            <Modal isExpanded={isExpanded} onClick={handleDocumentClick} selectedProject={selectedProject}/>

        </>
    )
}
export default Projects;