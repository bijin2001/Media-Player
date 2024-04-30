import React from 'react'
import { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../Services/allAPI';

function Add(setAddVideoResponse) {

    const [invalidYoutubeUrl, setInvalidUrl] = useState(false)
    const [videoDetails, setvideoDetails] = useState({
        caption: "", imageURL: "", youtubeURL: ""
    })

    console.log(videoDetails);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getEmbedURL = (link) => {

        // https://www.youtube.com/watch?v=L0yEMl8PXnw
        // https://www.youtube.com/embed/L0yEMl8PXnw
        // to display the youtube link it should under the embed code
        if (link.includes("v=")) {
            // checking whether v= present or not
            let videoId = link.split("v=")[1].slice(0, 11)
            // in this case [https://www.youtube.com/watch?, L0yEMl8PXnw]
            // the 11 number code ie, L0yEMl8PXnw in array [1]
            // then it slices to 0 to 11 to only show the first 11 elements (some cases there may after some funtions after the code)
            console.log(videoId);
            setvideoDetails({ ...videoDetails, youtubeURL: `https://www.youtube.com/embed/${videoId}` })
            setInvalidUrl(false)
        } else {
            setvideoDetails({ ...videoDetails, youtubeURL: "" })
            setInvalidUrl(true)

        }

    }


    const handleUpload = async () => {
        console.log('inside handleupload function');
        const { caption, imageURL, youtubeURL } = videoDetails
        if (caption && imageURL && youtubeURL) {

            console.log('api call');

            try{
                const result = await addVideoAPI(videoDetails)
                console.log(result);
                if(result.status>=200 && result.status<300){
            
                    console.log(result.data);
                    setAddVideoResponse(result.data)
                    toast.success(`${result.data.caption} added your collection !!!`)
                    handleClose()
                }else{
                    toast.error(result.response.data)
                }
            }catch(err){
                console.log(err);
            }
        } else {

            toast.error("Please fill the form")
        }
    }


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
                        <Form.Control onChange={(e) => setvideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video Caption" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                        <Form.Control type="text" placeholder="Image URL" onChange={(e) => setvideoDetails({ ...videoDetails, imageURL: e.target.value })} />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Youtube URL" className="mb-3">
                        <Form.Control type="text" onChange={e => getEmbedURL(e.target.value)} placeholder="Youtube URL" />
                    </FloatingLabel>
                    {
                        invalidYoutubeUrl && <div className='text-danger'>Invalid Youtube URL</div>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer  position='top-center' theme='colored' autoClose={3000}/>
        </div>

    )
}

export default Add