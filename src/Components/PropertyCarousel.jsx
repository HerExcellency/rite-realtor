// import React from 'react';
// import Slider from 'react-slick';

// const PropertyCarousel = ({ images }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={image} alt={`Slide ${index}`} />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default PropertyCarousel;

import React from 'react';
import Slider from 'react-slick';

const PropertyCarousel = ({ images }) => {
  const settings = {
    dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Autoplay interval in milliseconds
  };

  

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.main} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>

      <div className="thumbnails">
        {images.map((image, index) => (
          <div key={index} className="thumbnail-item">
            <img src={image.thumbnail} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;

