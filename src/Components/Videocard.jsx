import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


function Videocard() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <Card>
                <Card.Img onClick={handleShow} height={'300px'} variant="top" src="https://th.bing.com/th/id/OIP.IZbSdyEcjj0X6MJZiqRlOAHaJQ?rs=1&pid=ImgDetMain" />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-center align-items-center'>
                        <p> Caption</p>
                        <button className='btn' style={{ border: 'none' }}><i className='fa-solid fa-trash text-danger'></i></button>
                    </Card.Title>
                </Card.Body>
            </Card>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Caption</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="526" src="https://www.youtube.com/embed/e78ThRDGUTs?autoplay=1" title="Aavesham - Welcome Teaser |Jithu Madhavan| Fahadh Faasil |Sushin Shyam |Nazriya Nazim |Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Modal.Body>
            </Modal>


        </>
    )
}

export default Videocard