import React, { useState } from 'react';
// import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function InspectionForm() {
  const [formData, setFormData] = useState({
    // address: '',
    fullName: '',
    // inspectionDate: '',
    emailAdd: '',
    // inspectorName: '',
    telephone:'',
    // notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlePhoneCall = () => {
    window.open('tel:+2348094137777'); 
  };
  const handleEmail = () => {
    window.open('mailto:hello@riterealtors.com'); // Replace recipient@example.com with the recipient's email address
  };
  const handleWhatsApp = () => {
    window.open('https://wa.me/+2348094137777', '_blank'); // Replace 1234567890 with the recipient's phone number including the country code
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.post('http://localhost:3001/submit-form', formData)
      .then(response => {
        console.log(response.data);
        // Handle success, e.g., show a success message to the user
      })
      .catch(error => {
        console.error(error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <div className="formCenter">
      {/* <h1>Book A Viewing</h1> */}
      <form onSubmit={handleSubmit}>

      <h4>Book A Viewing</h4>
        <div className="form-group">
          {/* <label>Property Address:</label> */}
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="First Name, Last Name"
          />
        </div>
        <div className="form-group">
          {/* <label>Inspection Date:</label> */}
          <input
            type="mail"
            name="emailAdd"
            value={formData.emailAdd}
            onChange={handleChange}
            required
            placeholder='Email Address'
          />
        </div>
        <div className="form-group">
          {/* <label>Inspector Name:</label> */}
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            placeholder='Phone Number'
          />
        </div>
        
        <div className='formButton'>
          <button type="submit">Request For Inspection</button>
          <div className="InspectionFormIcons">
          <span onClick={handlePhoneCall}><FontAwesomeIcon icon={faPhone} /></span>
          <span onClick={handleEmail}><FontAwesomeIcon icon={faEnvelope} /></span>
          <span onClick={handleWhatsApp}><FontAwesomeIcon icon={faWhatsapp} /></span>
          
          </div>
          {/* <p>hello@riterealtors.com</p> */}
        </div>
        <p>hello@riterealtors.com</p>
      </form>
    </div>
  );
}

export default InspectionForm;
