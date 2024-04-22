import React from 'react'
import { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'

function Add() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='d-flex align-items-center'>
                <h5>Upload a New Video</h5>
                <button style={{ backgroundColor: '#62c462', color: 'white', borderRadius: '100px' }} onClick={handleShow} className='btn ms-3 fs-5 fw-bolder'>+</button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Please fill the following details</p>
                    <FloatingLabel controlId="floatingInput" label="Video Caption" className="mb-3">
                    <Form.Control type="email" placeholder="Video Caption" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                    <Form.Control type="email" placeholder="Image URL" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Youtube URL" className="mb-3">
                    <Form.Control type="email" placeholder="Youtube URL" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Add