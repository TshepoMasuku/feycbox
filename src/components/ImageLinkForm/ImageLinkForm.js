import React from 'react';

function ImageLinkForm({ onInputChange, onPictureSubmit }) {
    return (
        <div>
            <p className='f4 black'>
                {'This Magic Brain will detect faces in your pictures. Give it a try :~)'}
            </p>
            <div>
                <div 
                    className='pa4 br3 shadow-5 ma4' 
                    style={{ display:'flex',background: 'linear-gradient(to right, rgb(228, 110, 6), rgb(239, 5, 5))' }}
                >
                    <input 
                        className='f4 pa2 w-70 center' 
                        type='search' 
                        placeholder='Paste your Image link/URL here.' 
                        onChange={onInputChange} 
                    />
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white'
                        style={{ background: 'linear-gradient(to right, rgb(228, 110, 6), rgb(239, 5, 5))' }}
                        onClick={onPictureSubmit}
                    >
                        Detect
                    </button>
                </div>                
            </div>
        </div>
    )
}

export default ImageLinkForm;
