import React from 'react';
// web
import carousel_web_1 from '../assets/carousel_web_1.webp';
import carousel_web_2 from '../assets/carousel_web_2.jpg';
import carousel_web_3 from '../assets/carousel_web_3.webp';
import carousel_web_4 from '../assets/carousel_web_4.webp';
import carousel_web_5 from '../assets/carousel_web_5.webp';
// mobiles
import carousel_mob_1 from '../assets/carousel_mob_1.webp';
import carousel_mob_2 from '../assets/carousel_mob_2.webp';
import carousel_mob_3 from '../assets/carousel_mob_3.webp';
import carousel_mob_4 from '../assets/carousel_mob_4.webp';
import carousel_mob_5 from '../assets/carousel_mob_5.webp';

function Carousel() {
  return (

    <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{marginTop:"60px"}}>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel_web_1} className="d-block w-100 web-img-1" alt="..." />
          <img src={carousel_mob_1} className="d-block w-100 mob-img-1" alt="..." />
        </div>
      


        <div className="carousel-item">
          <img  src={carousel_web_2} className="d-block w-100 web-img-2" alt="..." />
          <img  src={carousel_mob_2} className="d-block w-100 mob-img-2" alt="..." />
        </div>

        <div className="carousel-item">
          <img src={carousel_web_3} className="d-block w-100 web-img-3" alt="..." />
          <img src={carousel_mob_3} className="d-block w-100 mob-img-3" alt="..." />
        </div>

        <div className="carousel-item">
          <img src={carousel_web_4} className="d-block w-100 web-img-3" alt="..." />
          <img src={carousel_mob_4} className="d-block w-100 mob-img-3" alt="..." />
        </div>

        <div className="carousel-item">
          <img src={carousel_web_5} className="d-block w-100 web-img-3" alt="..." />
          <img src={carousel_mob_5} className="d-block w-100 mob-img-3" alt="..." />
        </div>
        
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
}

export default Carousel;
