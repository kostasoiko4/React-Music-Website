import React from 'react'

import { Col, Row, Image } from 'react-bootstrap';

import bannerImage from "../assets/piano cinematic B&W.png"
import image1 from "../assets/self promo.png"
import image2 from "../assets/violins promo II.png"
import image3 from "../assets/orchestra full promo 3.png"

import ImageCard from '../components/ImageCard';
import TextCard from '../components/TextCard';

import biography from "../data/bio"
import "../styles/homePage.css"

const HomePage = () => {
  return (
    <>
      <Image className="banner-image" src={bannerImage}></Image>
      <Row className="justify-content-md-center">
        <TextCard title={biography.title1} description={biography.description1}/>
        <ImageCard image={image1}/>
        <TextCard title={biography.title2} description={biography.description2}/>
        <TextCard title={biography.title3} description={biography.description3}/>
        <ImageCard image={image2} />
        <TextCard title={biography.title4} description={biography.description4}/>
        <ImageCard image={image3} />
        <TextCard title={biography.title5} description={biography.description5}/>
        <TextCard title={biography.title6} description={biography.description6}/>
        <TextCard title={biography.title7} description={biography.description7}/>
      </Row>
    </>
  )
}

export default HomePage 