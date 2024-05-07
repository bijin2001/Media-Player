import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {

  const [addvideoResponse,setAddVideoResponse] = useState("")
  const [removeCategoryVideoResponse,setremoveCategoryVideoResponse] = useState("")
  const [deleteVideoCategoryResponse,setDeleteVideoCategoryResponse] = useState("")
  return (
    <>
      <div className='container my-5 d-flex justify-content-between'>
        <Add setAddVideoResponse={setAddVideoResponse}/>
        <Link to={'./history'}>Watch History</Link>

      </div>

      <div className='container-fluid my-5 row'>
        <div className='col-lg-6'>
          <h3 className='text-light'>All videos</h3>
          <View setDeleteVideoCategoryResponse={setDeleteVideoCategoryResponse} addvideoResponse={addvideoResponse} removeCategoryVideoResponse={removeCategoryVideoResponse}/>
        </div>

        <div className='col-lg-6'>

          <Category deleteVideoCategoryResponse={deleteVideoCategoryResponse} setremoveCategoryVideoResponse={setremoveCategoryVideoResponse}/>
        </div>

      </div>

    </>
  )
}

export default Home