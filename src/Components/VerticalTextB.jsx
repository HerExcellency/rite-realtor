import React from 'react';


const VerticalTextB = ({ text }) => {
  const vertically = text.split("").join("\n");

  return <pre style={{display: 'grid', overflow: 'hidden', whiteSpace: 'pre-wrap', margin:'0'}}><div className='boxyP'></div>{vertically}</pre>;
};

export default VerticalTextB;
