import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ThumbnailCarousel = ({ images }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
  };

  return (
    <div className="thumbnail-carousel">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        buttonsDisabled
        autoPlayInterval={2000}
      >
        {images.map((image, index) => (
          <div key={index} className="thumbnail-item">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </AliceCarousel>
      <div className="main-image">
        <img src={images[0]} alt="Main Image" />
      </div>
    </div>
  );
};
export default ThumbnailCarousel;