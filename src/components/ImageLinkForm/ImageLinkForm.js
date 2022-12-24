import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import './modal.css';
import './ImageLinkForm.css';

function ImageLinkForm({ onInputChange, onPictureSubmit }) {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <section>
            <p className='f4 black' style={{zIndex: 1, position: "relative"}}>
                {'This Magic Brain will detect faces in your pictures. Give it a try :~)'}
            </p>
            <div>
                <div 
                    className='pa4 br3 shadow-5 ma4' 
                    style={{ 
                        display:'flex', zIndex: 1, position: "relative",
                        background: 'linear-gradient(to right, rgb(228, 110, 6), rgb(239, 5, 5))' 
                    }}
                >
                    <input 
                        className='f4 pa2 w-60 center' 
                        type='search' 
                        placeholder='Paste your image address or URL here.' 
                        onChange={onInputChange} 
                    />
                    <button 
                        className='w-20 grow link ph3 pv2 dib white f4'
                        style={{ background: 'linear-gradient(to right, rgb(228, 110, 6), rgb(239, 5, 5))'}}
                        onClick={onPictureSubmit}
                    >
                        Detect Face
                    </button>
                    <button 
                        className='w-20 grow link ph3 pv2 dib white f4'
                        style={{ background: 'rgb(239, 5, 5)'}}
                        onClick={ onOpenModal }
                    >
                        Get Images
                    </button>
                </div>  
                <Modal 
                    open={open} 
                    onClose={ onCloseModal }
                    closeOnOverlayClick={ onCloseModal }
                    closeOnEsc={ onCloseModal }
                    classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                    }}
                >
                    <div>
                        <h3 className="tc monoton"> 
                            Select any website from the buttons below.
                        </h3>
                        <p className="monoton">
                            On the website you will select, you must choose any image with a face 
                            and copy its image-address then paste it on feycbox so you can detect the image.
                        </p> 

                        <button 
                            onClick={ onCloseModal }
                            className="w-30 ma2 center f4 grow"
                            style={{ background: 'rgb(255, 69, 0)' }}
                        >
                            <a 
                                href="http://pixabay.com/images/search/faces/" 
                                rel="noopener noreferrer" target="_blank" 
                                className="no-underline white pv2 ph4"
                            > 
                                pixabay
                            </a>
                        </button>

                        <button 
                            onClick={ onCloseModal }
                            className="w-30 ma2 center f4 grow"
                            style={{ background: 'rgb(255, 69, 0)' }}
                        >
                            <a 
                                href="http://www.pexels.com/search/face/" 
                                rel="noopener noreferrer" target="_blank" 
                                className="no-underline white pv2 ph4"
                            > 
                                pexels
                            </a>
                        </button>

                        <h6 className="tc f7 mt5"> THANX A LOT FOR USING feycbox, WITH LOVE FROM RSA :~) </h6>
                    </div>
                </Modal>            
            </div>
        </section>
    )
}

export default ImageLinkForm;
