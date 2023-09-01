import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Button = ({ to, children, disabled,  style, hoverStyle }) => {
    const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = isHovered ? { ...style, ...hoverStyle } : style;


  return (
    <button 
    onClick={handleClick} 
    disabled={disabled}
    style={buttonStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  hoverStyle: PropTypes.object
};

Button.defaultProps = {
  disabled: false,
  style: {},
  hoverStyle: {}
};

export default Button;
