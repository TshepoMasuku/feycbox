import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';

function ImageLinkForm({ onInputChange, onPictureSubmit }) {

    const [ openModal, setOpenModal ] = useState(false);
    const onOpenModal = () => { setOpenModal(true) }
    const onCloseModal = () => { setOpenModal(false) }

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
                        Detect Face
                    </button>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white'
                        style={{ background: 'linear-gradient(to right, rgb(228, 110, 6), rgb(239, 5, 5))' }}
                        onClick={ onOpenModal }
                    >
                        Get Images
                    </button>
                </div>  
                <Modal 
                    open={openModal} 
                    onClose={ onCloseModal }
                    closeOnOverlayClick={ onCloseModal }
                    closeOnEsc={ onCloseModal }
                    classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                    }}
                >
                    <div className="text-center">
                        <h3 className="monoton"> 
                            Select any website from the buttons below.
                        </h3>
                        <p className="monoton">
                            On the website you have selected, 
                            you must choose any image with a face 
                            and copy its image-address 
                            then paste it on feycbox so you can detect the image.
                        </p> 

                        <button 
                            variant="primary" 
                            onClick={ onCloseModal }
                            className="mx-2 mt-2 mb-5"
                        >
                            <a href="http://pixabay.com/images/search/faces/"> 
                                pixabay 
                            </a>
                        </button>
                        
                        <button 
                            variant="danger" 
                            onClick={ onCloseModal }
                            className="mx-2 mt-2 mb-5"
                        >
                            <a href="http://www.pexels.com/search/face/"> 
                                pexels 
                            </a>
                        </button>

                        <h6> THANX A LOT FOR USING feycbox, WITH LOVE FROM RSA :~) </h6>
                    </div>
                </Modal>            
            </div>
        </div>
    )
}

export default ImageLinkForm;
