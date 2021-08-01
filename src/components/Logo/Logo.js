import React from 'react'
import Tilt from 'react-tilt';
import brain from './brain.png';

function Logo() {
    return (
        <div className='logo ma4 mt0'>
            <Tilt 
                className='Tilt br2 shadow-2' 
                options={{ max: 45 }} 
                style={{ height: 100,width: 100,background: 'linear-gradient(to right, rgb(228, 110, 6), rgb(239, 5, 5))' }}
            >
                <div className='Tilt-inner pa3'>
                    <img 
                        alt="LOGO" 
                        src={brain} 
                        style={{ paddingTop: '2px' }}
                    />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
