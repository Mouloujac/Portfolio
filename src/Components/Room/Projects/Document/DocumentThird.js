import React, { useState } from "react";

import Polaroid from "./Polaroid";
import Modal from "../Modal/Modal";
import "./Document.css"

function DocumentThird(props) {
  

  
  return (
    <>
        <div className="documentThird-base">
            <div className="documentThird-text">
                <p>Ça fait rire les oiseaux et danser les écureuils ca rajoute des couleurs aux couleurs de l'arc-en-ciel ca fait rire les oiseaux oh, oh, oh, rire les oiseaux ca fait rire les oiseaux oh, oh, oh, rire les oiseaux une chanson d'amour c'est comme un looping en avion ca fait battre le cœur des filles et des garçons une chanson d'amour c'est d'l'oxygène dans la maison tes pieds touchent plus par terre t'es en lévitation</p> 
                
            </div>
        </div>
        <Polaroid id="project-3" />
        
    </>
  );
}

export default DocumentThird;
