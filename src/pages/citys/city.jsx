import React, { useRef } from "react";
import Slider from "react-slick";
import city1 from '../../assets/cities/bh.png';
import city2 from '../../assets/cities/rj.png';
import city3 from '../../assets/cities/sal.png';
import city4 from '../../assets/cities/sc.png';
import city5 from '../../assets/cities/slz.png';
import city6 from '../../assets/cities/sp.png'; 
import back from '../../assets/icons/back.png'
import forw from '../../assets/icons/forw.png'
import './city.css'

const CityCarousel = () => {
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
      src: city1,
      alt: '1',
      info: 'Belo Horizonte - MG',
    },
    {
      id: 2,
      src: city2,
      alt: '2',
      info: 'Rio de Janeiro - RJ'
    },
    {
      id: 3,
      src: city3,
      alt: '3',
      info: 'Salvador - BA'
    },
    {
      id: 4,
      src: city4,
      alt: '4',
      info: 'Florianópolis - SC'
    },
    {
      id: 5,
      src: city5,
      alt: '5',
      info: 'São Luis - MA',
    },
    {
      id: 6,
      src: city6,
      alt: '6',
      info: 'São Paulo - SP'
    }
  ];

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="carouselContainer">
      <button className="clickButton" onClick={goToPrevSlide}>
        <img src={back} alt="" />
      </button>
      <Slider {...settings} ref={sliderRef}>
        {images.map(image => (
          <div className="cityImg" key={image.id}>
            <img className="carouselDois" src={image.src} alt={image.alt} />
            <p>{image.info}</p>
          </div>
        ))}
      </Slider>
      <button className="clickButton" onClick={goToNextSlide}>
        <img src={forw} alt="" />
      </button>
    </div>
  );
}

export default CityCarousel;
