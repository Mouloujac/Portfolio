import React from "react";
import "./Projects.css";
import { useState } from "react";


import Document from "./Document/Document";
import DocumentSecond from "./Document/DocumentSecond";
import DocumentThird from "./Document/DocumentThird";

function Projects (){
    const [isExpanded, setIsExpanded] = useState(false);

    const handleDocumentClick = () => {
        if(isExpanded == false){
            setIsExpanded(!isExpanded);
            
        }else{
            setIsExpanded(!isExpanded);
            
        }
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
                <div className="project first" onClick={handleDocumentClick}>
                    <Document  isExpanded={isExpanded} />
                </div>
                <div className="project second">
                    <DocumentSecond />
                </div>
                <div className="project third">
                    <DocumentThird />  
                </div>
            </div>

        </>
    )
}
export default Projects;