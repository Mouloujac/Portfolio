import React from 'react'

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
                <div className="corner-1 foot">
                    <div className='base'></div>
                </div>
                <div className="corner-2 foot">
                    <div className='base'></div>
                </div>
                <div className="corner-3 foot">
                    <div className='base'></div>
                </div>
                <div className="corner-4 foot">
                    <div className='base'></div>
                </div>
            </div>

        </>
    );
}

export default Desk;