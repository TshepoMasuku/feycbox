import React from 'react';
import './FaceRecognition.css';

export default function FaceRecognition({ imageURL,box }) {
    return (
        <div className='center ma f4 faceRecognition'>
            <p>feycbox</p>
            <div className='mt2' style={{position: "relative"}}>
                <img 
                    id={'inputimage'} 
                    className='br4 shadow-5 ma3 faceImage' 
                    src={imageURL} 
                    alt='' 
                    height='auto' 
                    width='80%'
                />
                <div
                    className='bounding_box'
                    style={{ 
                        top:box.topRow, right:box.rightCol, 
                        bottom:box.bottomRow, left:box.leftCol 
                    }}
                ></div>
            </div>            
        </div>
    )
}
