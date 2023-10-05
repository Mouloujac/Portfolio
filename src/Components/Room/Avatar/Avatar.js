import React from 'react'
import "./Avatar.css"

function Avatar (){
    return (
        <div className='avatar'>
            <div className='body'></div>
            <div className='right-arm-up'></div>
            <div className='right-arm-up-shadow'></div>
            <div className='right-arm-down'></div>
            <div className='left-arm-up'></div>
            <div className='left-arm-up-shadow'></div>
            <div className='left-arm-down'></div>
            <div className='right-leg'></div>
            <div className='right-leg-shadow'></div>
            <div className='left-leg'></div>
        </div>
    );
}

export default Avatar;