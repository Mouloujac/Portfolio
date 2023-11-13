import React, { useEffect, useRef, useState } from 'react';
import './Room.css'; // Assurez-vous d'importer votre fichier CSS
import Window from './Window/Window';
import Desk from './Desk/Desk';
import Avatar from './AvatarDesk/AvatarDesk'
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
      const leftWidth = leftRef.current.offsetWidth;
      const rightWidth = rightRef.current.offsetWidth;
      const totalWidth = leftWidth + rightWidth;
      
      setRoomWidth(totalWidth);

      const marginLeft = (windowWidth - totalWidth) / 2;
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
      <div id="left-wall"></div>
      <div ref={leftRef} id="left-wall-shadow"></div>
      <div id="right-wall">
        <Window />
      </div>
      <div className='window-middle'>
        <div className='middle-line'></div>
        <div className='handle'></div>
        <div className='shadow-line-right'></div>
        <div className='shadow-line-left'></div>
      </div>
      <div ref={rightRef} id="right-wall-shadow"></div>
      <Screen />
      <Projects />
      <Avatar />
      <Desk />
      <div id="ground"></div>
      <Carpet />
      <div id="ground-shadow"></div>
    </div>
  );
}

export default Room;
