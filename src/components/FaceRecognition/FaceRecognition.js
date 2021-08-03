import React from 'react';
import './FaceRecognition.css';

export default function FaceRecognition({ imageURL,box }) {
    return (
        <div className='center ma f4'>
            {'feycbox'}
            <br />
            <div className='mt2 absolute'>
                <img 
                    id={'inputimage'} 
                    className='br4 shadow-5 ma3' 
                    src={imageURL} 
                    alt='' 
                    height='auto' 
                    width='500px'
                />
                <div
                    className='bounding-box'
                    style={{ top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol, }}
                ></div>
            </div>            
        </div>
    )
}
