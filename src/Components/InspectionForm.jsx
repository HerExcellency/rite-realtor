import React, { useState } from 'react';
// import './App.css';
import axios from 'axios';

function InspectionForm() {
  const [formData, setFormData] = useState({
    address: '',
    inspectionDate: '',
    inspectorName: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    <div className="App">
      <h1>Property Inspection Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Property Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Inspection Date:</label>
          <input
            type="date"
            name="inspectionDate"
            value={formData.inspectionDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Inspector Name:</label>
          <input
            type="text"
            name="inspectorName"
            value={formData.inspectorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Inspection Notes:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InspectionForm;
