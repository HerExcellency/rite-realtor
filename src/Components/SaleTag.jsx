import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assuming you have FontAwesome icons set up
import '../Css/Property.css'

function SaleTag() {
  return (
    <span className="fa-stack fa-lg">
      <FontAwesomeIcon icon="tag" className="fa-stack-2x" />
      <span className="fa-stack-1x fa-inverse">For Sale</span>
    </span>
  );
}

export default SaleTag;
