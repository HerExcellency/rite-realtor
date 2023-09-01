import React from 'react';


const VerticalText = ({ text }) => {
  const vertically = text.split("").join("\n");

  return <pre style={{display: 'grid', overflow: 'hidden', whiteSpace: 'pre-wrap', margin:'0'}}><div className='boxy'></div>{vertically}</pre>;
};

export default VerticalText;
