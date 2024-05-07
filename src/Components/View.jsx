import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { addVideoAPI, getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI} from '../Services/allAPI';


function View({setDeleteVideoCategoryResponse, addvideoResponse, removeCategoryVideoResponse}) {

    const[deleteResponse,setDeleteResponse] = useState("")
    const [allVideos, setAllVideos] = useState([])

    console.log(allVideos);
    useEffect(() => {
        getALLVideos()
    }, [addvideoResponse,deleteResponse, removeCategoryVideoResponse])

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

    const dragOverView = (e)=>{

        e.preventDefault()
    }

    const handleCategoryVideo = async (e)=>{

        const {categoryId,videoDetails} = JSON.parse(e.dataTransfer.getData("datashare"))
        console.log(categoryId,videoDetails);
        try{

            const {data} = await getSingleCategoryAPI(categoryId)
            console.log(data);
            const updatedCategoryVideoList = data.allVideos.filter(item=>item.id!==videoDetails.id)
            console.log(updatedCategoryVideoList);
            const {categoryName,id} = data
            const categoryResult = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryVideoList});
            setDeleteVideoCategoryResponse(categoryResult.data)
            await addVideoAPI(videoDetails)
            getALLVideos()
        
        }catch(err){
            console.log(err);
        }
    }





    return (
        <>

            <Row droppable={true} onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
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