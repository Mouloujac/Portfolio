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
      <div
        className={`${props.isExpanded ? 'document-base-expanded' : 'document-base'}`}
        id="documentFirst"
      ></div>

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
