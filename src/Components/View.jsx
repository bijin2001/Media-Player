import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideoAPI } from '../Services/allAPI';


function View({addvideoResponse}) {

    const[deleteResponse,setDeleteResponse] = useState("")
    const [allVideos, setAllVideos] = useState([])

    console.log(allVideos);
    useEffect(() => {
        getALLVideos()
    }, [addvideoResponse,deleteResponse])

    const getALLVideos = async () => {

        try {

            const result = await getAllVideoAPI()
            console.log(result);
            if (result.status >= 200 && result.status < 300) {

                setAllVideos(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <>

            <Row>
                {

                    allVideos.length > 0 ?
                        allVideos?.map(video => (

                            <Col className='mb-4' sm={12} md={6} lg={4}>
                                <Videocard displayData = {video} setDeleteResponse = {setDeleteResponse} />
                            </Col>
                        ))
                        :
                        <div className='text-danger fw-bolder'>Nothing to show</div>

                }
            </Row>

        </>
    )
}

export default View