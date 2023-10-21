import React, { useState, useEffect } from "react";
import Polaroid from "./Polaroid";
import Thumbtack from "../Thumbtack/Thumbtack";
import "./Document.css";

function Document(props) {
  const [thumbtacksVisible, setThumbtacksVisible] = useState(true);

  // Utilisez useEffect pour gérer les changements de props.isExpanded
  useEffect(() => {
    if (props.isExpanded) {
      // Si isExpanded est true, masquez les Thumbtacks
      setThumbtacksVisible(false);
    } else {
      // Si isExpanded est false, attendez 1.5 secondes pour rétablir les Thumbtacks
      const timeoutId = setTimeout(() => {
        setThumbtacksVisible(true);
      }, 500);

      // Assurez-vous de nettoyer le timeout lorsque le composant se démonte
      return () => clearTimeout(timeoutId);
    }
  }, [props.isExpanded]);

  return (
    <>
      <img id="paper-clip" src={`${props.isExpanded ? './paper-clip.svg' : ''}`}></img>
      <img id="paper-clip-shadow" src={`${props.isExpanded ? './paper-clip-shadow.svg' : ''}`}></img>

      <div
        className={`${props.isExpanded ? 'document-base-expanded' : 'document-base'}`}
        id="documentFirst">
          
          {props.isExpanded &&
          <div className="description">
            <h3>Projet de fin d'études</h3>
            <h4>Site e-commerce</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit sed turpis non iaculis. Praesent efficitur ante in turpis tincidunt volutpat. Quisque sit amet augue congue, laoreet odio eget, rutrum ex. Vivamus commodo malesuada ligula vel condimentum. Sed imperdiet rutrum sapien ac aliquet. Nam eu lacus sem.</p>
            <p></p>
            <div className="technos">
              <img className="icons" src="react.svg"></img>
              <img className="icons" src="laravel.svg"></img>
              <img className="icons" src="css.svg"></img>
            </div>
            <a>Lien Github</a>
          </div>
          } 
      </div>

      <div className="document-corner"></div>

      {thumbtacksVisible && (
        <>
          <Thumbtack id="firstThumbTop" />
          <Thumbtack id="firstThumbBottom" />
        </>
      )}

      <Polaroid id="project-1" isExpanded={props.isExpanded} />
    </>
  );
}

export default Document;
