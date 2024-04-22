import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocard from './Videocard'
function View() {
    return (
        <>

            <Row>

                <Col className='mb-4' sm={12} md={6} lg={4}>
                    
                    <Videocard />

                </Col>

            </Row>

        </>
    )
}

export default View