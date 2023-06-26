import React, { useRef } from "react";
{/*import Slider from "react-slick";*/}
import cars1 from '../assets/img/CACT.png';
import cars2 from '../assets/img/COLF.png';
import cars3 from '../assets/img/COMP.png';
import cars4 from '../assets/img/PGTF.png';
import cars5 from '../assets/img/RENE.png';
import cars6 from '../assets/img/RENF.png';
import cars7 from '../assets/img/TIGX.png';
import './slide.css'

import back from '../assets/icons/back.png'
import forw from '../assets/icons/forw.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    createMode: true,
    centerPadding: '0px',
  };

  const images = [
    {
      id: 1,
      src: cars1,
      alt: '1',
      name: 'São Luis - MA',
    },
    {
      id: 2,
      src: cars2,
      alt: '2',
      info: 'Toyota Corolla 2.0'
    },
    {
      id: 3,
      src: cars3,
      alt: '3',
      info: 'Jeep Compass 1.3 Turbo'
    },
    {
      id: 4,
      src: cars4,
      alt: '4',
      info: 'Peugeot 208 Hatch 1.6 FAST'
    },
    {
      id: 5,
      src: cars5,
      alt: '5',
      info: 'Jeep Renegade 1.8'
    },
    {
      id: 6,
      src: cars6,
      alt: '6',
      info: 'Jeep Renegade 1.8 FAST'
    },
    {
      id: 7,
      src: cars7,
      alt: '7',
      info: 'Chery Tiggo 8 1.6'
    },
  ];

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="carousel-container" >
        <button className="click" onClick={goToPrevSlide}><img src={back} alt="" /></button>
        
      <Slider {...settings} ref={sliderRef}>
        {images.map(image => (
          <div className="carsImgInfo" key={image.id}>
            <img className="carousel-image" src={image.src} alt={image.alt} />
            <p> {image.info} </p>
          </div>
        ))}
      </Slider>
      <button className="click" onClick={goToNextSlide}><img src={forw} alt="" /></button>
    </div>
  );
};

export default ImageCarousel;
