import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideoHistoryAPI } from '../Services/allAPI';
Link

function History() {

  const [videoHistory,setVideoHistory] = useState([])
  console.log(videoHistory);
  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async()=>{

    try{

      const result = await getVideoHistoryAPI()
      setVideoHistory(result.data)
    }catch(err){
      console.log(err);
    }
  }



  return (
    <>
    <div className='d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'./home'}>Back To Home</Link>
    </div>

    <table className='table my-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Video Link</th>
          <th>Time Stamp</th>
          <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
        </tr>
      </thead>
      <tbody className='mt-5'>
        <td>1</td>
        <td>Aavesham teaser</td>
        <td><a href='https://www.youtube.com/embed/e78ThRDGUTs' style={{textDecoration:'none',backgroundColor:'transparent'}} target='_blank'>https://www.youtube.com/embed/e78ThRDGUTs</a></td>
        <td>22/4/2024 10:45am</td>
        <td><button className='btn' style={{border:'none'}}><i className='fa-solid fa-trash text-danger'></i></button></td>
      </tbody>
    </table>
    </>
  )
}

export default History