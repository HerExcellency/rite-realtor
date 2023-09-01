import React, { useState } from 'react';
// import './Gallery.css';
import '../Css/Gallery.css'; // CSS file for styling
import project1 from "../media/project1.png";
import project2 from "../media/project2.png";
import project3 from "../media/project3.png";
import VerticalText from "../Components/VerticalText";

const Gallery = () => {
  const sentence = "PROJECTS";
  const [highlightedImage, setHighlightedImage] = useState(null);

  const handleImageHover = (image) => {
    setHighlightedImage(image);
  };

  const images = [
    {
      id: 1,
      src: project1,
      title: 'Image 1',
      description: 'This is the first image.',
    },
    {
      id: 2,
      src: project2,
      title: 'Image 2',
      description: 'This is the second image.',
    },
    {
      id: 3,
      src: project3,
      title: 'Image 3',
      description: 'This is the third image.',
    },
  ];

  return (
    <div className="container" style={{paddingTop:'50px', paddingBottom: '50px', display:'flex'}}>
    <div className="gallery ">
      {images.map((image) => (
        <div
          key={image.id}
          className={`image-container ${highlightedImage === image ? 'highlighted' : ''}`}
          onMouseEnter={() => handleImageHover(image)}
          onMouseLeave={() => handleImageHover(null)}
        >
          <img src={image.src} alt={image.title} className="image" />
          {highlightedImage === image && (
            <div className="image-details">
              <h3>{highlightedImage.title}</h3>
              <p>{highlightedImage.description}</p>
            </div>
          )}
        </div>
      ))}
      </div>
      <VerticalText text={sentence} />
    </div>
  );
};

export default Gallery;
