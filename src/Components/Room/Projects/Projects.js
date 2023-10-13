import React from "react";
import "./Projects.css";

import Polaroid from "./Polaroid";


function Projects (){
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
                <Polaroid />
            </div>

        </>
    )
}
export default Projects;