import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MediaCard from './components/MediaCard';

function HomePage({product}) {

    return (
            <Container className="ctn-after-nav">
                <Row>
                    {product.map((el,inedx)=><Col><MediaCard data={el} key={inedx} /> </Col>)}
                </Row>
            </Container>
    )
}




export default HomePage
