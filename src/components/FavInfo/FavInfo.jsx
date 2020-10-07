import React, { useState } from 'react';
import { Button } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';

import './FavInfo.css';

const FavInfo = () => {
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <div>
            <Button style={{ marginBottom: '1rem' }} onClick={toggle} className="btn-floating btn-large waves-effect waves-light green" >
            <i className="material-icons">add</i>
            </Button>
            <Modal isOpen={modal} toggle={toggle} className="modal-trigger">
                <ModalHeader toggle={toggle}>Your New Favorite Video</ModalHeader>
                    <ModalBody>
                        I have created an app where you can look for your new favorite video. Search any term, and click on any of the images and a modal appears with a larger picture of the videos thumbnail with the title, channel name and a description of the video below. You can click the image to open the video in another window or click off the modal to choose a different video.
                    </ModalBody>
                <ModalFooter>

                    <Button className="green" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};



export default FavInfo;