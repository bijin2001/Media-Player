import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideoHistoryAPI, removeHistoryAPI } from '../Services/allAPI';
Link

function History() {

  const [videoHistory, setVideoHistory] = useState([])
  console.log(videoHistory);
  useEffect(() => {
    getAllHistory()
  }, [])

  const getAllHistory = async () => {

    try {

      const result = await getVideoHistoryAPI()
      setVideoHistory(result.data)
    } catch (err) {
      console.log(err);
    }
  }

  const removeHistory = async (videoId) => {
    try{
      
      await removeHistoryAPI(videoId)
      getAllHistory()
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
        <tbody>
          {

            videoHistory.length > 0 ?
              videoHistory?.map((item, index,) => (


                <tr key={item?.id}>
                  <td>{index+1}</td>
                  <td>{item?.caption}</td>
                  <td><a href={item?.youtubeURL} target='_blank'>{item?.youtubeURL}</a></td>
                  <td>{item?.timeStamp}</td>
                  <td><button className='btn' onClick={()=>removeHistory(item?.id)} style={{ border: 'none' }}><i className='fa-solid fa-trash text-danger'></i></button></td>

                </tr>
              ))
              :
              <div className='text-danger fw-bolder'>Your Watch History Is Empty</div>
          }
        </tbody>
      </table>
    </>
  )
}

export default History