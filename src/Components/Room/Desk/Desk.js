import React from 'react'

import AvatarDesk from "../AvatarDesk/AvatarDesk"
import Screen from '../Screen/Screen';
import "./Desk.css"


function Desk (){
    return (
        <>  
            <div className='desk'>
                <div className="desk-base">
                </div>
                <div className="desk-top">
                    <div className='keyboard'></div>
                    <div className='keyboard-shadow'></div>
                    <div className='mouse'></div>
                </div>
                <div className="corner-1"></div>
                <div className="corner-2"></div>
                <div className="corner-3"></div>
                <div className="corner-4"></div>
            </div>

        </>
    );
}

export default Desk;