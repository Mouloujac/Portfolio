import React from 'react'
import "./Screen.css"

function Screen (){
    return (
        <>   
            <div className='screen'>
                <div className='screen-left'>
                    <div className='screen-left-back'>
                    </div>
                    <div className='screen-left-front'>
                        <div className='screen-left-border'>
                            <div className='screen-left-interior'></div>
                        </div>
                    </div>
                </div>
                <div className='screen-right'>
                    <div className='screen-right-back'>
                    </div>
                    <div className='screen-right-front'>
                        <div className='screen-right-border'>
                            <div className='screen-right-interior'></div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Screen;