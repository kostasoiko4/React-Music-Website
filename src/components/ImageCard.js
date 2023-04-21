import React from 'react'
import { Card, Image, Dropdown } from 'react-bootstrap';

import "../styles/imageCard.css"

const ImageCard = ({ image }) => {
    
  return (
    <Card className="image-card p-0">
        <Card.Body>
          <Image src={image} className="image-card-header-image card-img-top"/>
        </Card.Body>
    </Card>
  )
}

export default ImageCard