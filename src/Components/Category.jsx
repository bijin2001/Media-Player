import React, { useEffect, useState } from 'react'
import Videocard from './Videocard';
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, removeCategoryAPI, getVideoAPI, updateCategoryAPI, removeVideoAPI } from '../Services/allAPI';


function Category({deleteVideoCategoryResponse,setremoveCategoryVideoResponse}) {

  const [allCategories,setAllCategories] = useState([])
  const [categoryName,setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  console.log(allCategories);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{

    getAllCategory()
  },[deleteVideoCategoryResponse])


  const getAllCategory = async () =>{

    try{

      const result = await getCategoryAPI()
      setAllCategories(result.data)
    }catch(err){

      console.log(err);
    }
  }



  const handleAddCategory = async () => {

    if(categoryName){

      // api call
      try{

        await addCategoryAPI({categoryName,allVideos:[]})
        setCategoryName("")
        handleClose()
        getAllCategory()

      }catch(err){

        console.log(err);
      }
      
    }else{

      toast.error("Form is empty")
    }

  }

  const handleRemoveCategory = async(categoryId)=>{
    
    try{
      
      await removeCategoryAPI(categoryId)
      getAllCategory()
    }catch(err){

      console.log(err);
    }

  }

  const dragOverCategory = (e)=>{
    e.preventDefault()
    console.log("Dragging Over Category");
  }

  const videoDropped = async (e,categoryId)=>{
    
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`Video id: ${videoId} Dropped in category id: ${categoryId}`);
    try{

      const {data} = await getVideoAPI(videoId)
      console.log(data);
      let selectedCategory = allCategories?.find(item=>item.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      const result = await removeVideoAPI(videoId)
      setremoveCategoryVideoResponse(result)
      getAllCategory()

    }catch(err){
      console.log(err);
    }
  }

  const VideoDragStarted = (e,videoDetails,categoryId)=>{
    console.log("Video Drag Started From Category");
    let dataShare = {categoryId,videoDetails}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }


  return (
    <>
      <div className='d-flex justify-content-around'>

        <h3 className='text-light'>All Categories</h3>
        <button onClick={handleShow} style={{ backgroundColor: '#62c462', color: 'white', borderRadius: '100px' }} className='btn ms-3 fs-5 fw-bolder'>+</button>

      </div>

      <div className='container-fluid mt-3'>

        {

          allCategories.length>0?
          allCategories?.map(item=>(
            <div droppable={true} onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropped(e,item?.id)} key={item?.id}  style={{borderRadius:'10px'}} className='border rounder p-3 mt-3'>
              <div className='d-flex justify-content-between'>
                <h5>{item?.categoryName}</h5>
                <button style={{border:'none'}} onClick={()=>handleRemoveCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              </div>
              <div className='row mt-2'>
                {
                  item.allVideos?.length>0 &&
                  item.allVideos?.map(video=>(
                    <div draggable={true} onDragStart={e=>VideoDragStarted(e,video,item.id)} key={video?.id} className='col-lg-6'>
                      < Videocard displayData={video} insideCategory={true}/>
                    </div>

                  ))
                }

              </div>
            </div>
          ))
          :
          <div className='text-danger fw-bolder'>
            No Categories Added Yet
          </div>
        } 

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Name"
            className="mb-3">
            <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer  position='top-center' theme='colored' autoClose={3000}/>


    </>
  )
}

export default Category