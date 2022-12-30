import React from 'react'
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

function Logo() {
    return (
        <div style={{margin: "2rem", zIndex: 1, position: "relative"}}>
            <Tilt 
                className='br2 shadow-2' 
                scale={1.11} transitionSpeed={2500}
                style={{ 
                    height: "6rem",
                    width: "6rem",
                    background: 'linear-gradient(to right, rgb(228, 110, 6), rgb(239, 5, 5))' 
                }}
            >
                <div className='pa3'>
                    <img 
                        alt="LOGO" 
                        src={brain} 
                    />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
