import React, { useEffect, useRef, useState } from 'react';
import './Room.css'; // Assurez-vous d'importer votre fichier CSS
import Window from './Window/Window';
import Desk from './Desk/Desk';
import Avatar from './AvatarDesk/AvatarDesk';
import Parquet from './Parquet/Parquet';
import Screen from './Screen/Screen';
import Projects from './Projects/Projects';
import Carpet from './Carpet/Carpet';

function Room() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const roomRef = useRef(null);
  const [roomWidth, setRoomWidth] = useState(0);

  // Fonction pour calculer la largeur de la fenêtre et ajuster la marge gauche
  const centerRoom = () => {
    if (roomRef.current) {
      const windowWidth = window.innerWidth;
      console.log(windowWidth);
      const leftWidth = leftRef.current.offsetWidth;
      const rightWidth = rightRef.current.offsetWidth;
      const roomWidth = (leftWidth + rightWidth);
      console.log(roomWidth);
      const marginLeft = (windowWidth - roomWidth) / 2;
      console.log(marginLeft);
      setRoomWidth(roomWidth);
      roomRef.current.style.marginLeft = `${marginLeft}px`;
    }
  };

  // Mettez à jour le centrage chaque fois que la fenêtre est redimensionnée
  useEffect(() => {
    window.addEventListener('resize', centerRoom);
    centerRoom(); // Appelez la fonction au chargement de la page
    return () => {
      window.removeEventListener('resize', centerRoom);
    };
  }, []);

  return (
    <div ref={roomRef} className='room'>
      <div id="left-wall">
        
      </div>
      <div  ref={leftRef} id="left-wall-shadow"></div>
      <div id="right-wall">
        <Window />
      </div>
      <div className='window-middle'>
        <div className='middle-line'></div>
        <div className='handle'></div>
        <div className='shadow-line-right'></div>
        <div className='shadow-line-left'></div>
      </div>
      <div  ref={rightRef} id="right-wall-shadow"></div>
      <Carpet />
      <Avatar />
      <Desk />
      <Screen />
      <Projects />
      <div id="ground">
        <Parquet />
      </div>
      <div id="ground-shadow"></div>
    </div>
  );
}

export default Room;
