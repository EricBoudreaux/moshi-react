import React from "react";
import Slider from "react-slick";
import ReviewPost from "./ReviewPost";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel() {


  var settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  
  return (
    
    <Slider {...settings}>
            {/* Props: post, name */}

      <div>
        <ReviewPost 
        post="The food was flavorful, savory, and succulent. This is definitely a spot I'll be frequenting."
        name="JANE S."
        />
      </div>
      <div>
        <ReviewPost 
        post="Everything was simply decadent. I'd give more than 5 stars if I could!"
        name="FRANK G."
        />

      </div>
      <div>
      <ReviewPost 
      post="Best experience ever! The waitress did an excellent job. After my meal, I was knocked into a food coma."
      name="SOPHIA J."
      />

      </div>
    </Slider>
  );
}