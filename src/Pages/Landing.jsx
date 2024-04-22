import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../assets/music-beat.gif'
import cardimage from '../assets/card1.gif'
import Card from 'react-bootstrap/Card';
import Card3 from '../assets/card3.gif'


function Landing() {
  return (
    <>
      <div className='landing container'>
        <div className='row align-items-center my-5'>
          <div className='col-lg-6'>
            <h1>Welcome to <span className='text-light'>Media</span></h1>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi amet aspernatur possimus quaerat deserunt nam dolore nesciunt dignissimos! Magni doloremque quas minima nobis molestias neque esse rem numquam vel adipisci.</p>

            <Link to={'./home'} style={{ backgroundColor: '#62c462', color: '#272626' }} className='btn'>Get Started</Link>
          </div>

          <div className='col-lg-6'>
            <img src={gif} alt="" />
          </div>

        </div>

        {/* features */}

        <div className='features my-5'>
          <h3 className='text-center text-light'>Features</h3>
          <div className='row'>
            <div className="col-lg-4">

              <Card style={{ width: '22rem',height:'400px' }}>
                <Card.Img style={{height:'18em'}} variant="top" src={cardimage} />
                <Card.Body>
                  <Card.Title className='text-light'>Manage videos</Card.Title>
                  <Card.Text>
                    User can upload, view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{ width: '22rem',height:'400px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title className='text-light'>Categorize Vidoes</Card.Title>
                  <Card.Text>
                  User can categorise the videos according to their prefernces using drag and drop features
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-lg-4">
            <Card style={{ width: '22rem',height:'400px' }}>
                <Card.Img style={{height:'18em'}} variant="top" src={Card3} />
                <Card.Body>
                  <Card.Title className='text-light'>Watch History</Card.Title>
                  <Card.Text>
                  User are able to see the history of watched videos.
                  </Card.Text>
                </Card.Body>
              </Card>


            </div>

          </div>
        </div>

        <div className='my-5 border rounded p-5 row' >
          <div className='col-lg-5'>
            <h3 style={{color:'#62c462'}} className='text-light'> Simple Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5 text-light'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est distinctio cupiditate magnam sapiente suscipit in eius dolorem consequatur! Accusamus quaerat fugit beatae ad! Facere labore fugit totam maxime tempore.
            </p>

            <p style={{textAlign:'justify'}}>
              <span className='fs-5 text-light' >Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est distinctio cupiditate magnam sapiente suscipit in eius dolorem consequatur! Accusamus quaerat fugit beatae ad! Facere labore fugit totam maxime tempore.
            </p>

            <p style={{textAlign:'justify'}}>
              <span className='fs-5 text-light'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est distinctio cupiditate magnam sapiente suscipit in eius dolorem consequatur! Accusamus quaerat fugit beatae ad! Facere labore fugit totam maxime tempore.
            </p>


          </div>
          <div className="col"></div>
          <div className='col-lg-6'>
          <iframe width="100%" height="516" src="https://www.youtube.com/embed/W8a4sUabCUo" title="Ruth B. - Dandelions (Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>

      </div>
    </>
  )
}

export default Landing