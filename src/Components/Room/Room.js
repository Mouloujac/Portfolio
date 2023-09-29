import React from 'react'
import "./Room.css"
import Window from './Window/Window'
import Desk from './Desk/Desk';
import Avatar from './Avatar/Avatar'

function Room (){
    return (
        <>
            <div id="left-wall">
            </div>
            <div id="left-wall-shadow">
            </div>
            <div id="right-wall">
            <Window />
            </div>
            <div className='window-middle'>
                <div className='middle-line'>
                </div>
                <div className='handle'></div>
                <div className='shadow-line-right'>
                </div>
                <div className='shadow-line-left'>
                </div>
            </div>
            <div id="right-wall-shadow">
            </div>
            <div id="ground"> 
            </div>
            <div id="ground-shadow">
            </div>
            <Desk/>
            <Avatar/>
            
        </>
    );
}

export default Room;