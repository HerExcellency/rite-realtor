import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import '../Css/contact.css';
import Button from '../Components/Button';
import { FaLocationArrow, FaMailchimp, FaPhone } from 'react-icons/fa';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    telephone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className='contact-page'>
      <Navbar />
        <div className='contact-form container'>
          <h3>Contact Us</h3>
          <form className="contact-forms container" onSubmit={handleSubmit}>
            <div className="form-group col-lg-6 col-md-6 col-sm-12">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Full Name'
              />
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Email'
              />
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12">
              {/* <label htmlFor="subject">Subject:</label> */}
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder='Subject'
              />
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12">
              {/* <label htmlFor="telephone">Telephone:</label> */}
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                placeholder='Telephone Number'
              />
            </div>
            <div className="form-group col-lg-12 col-md-12 col-sm-12">
              {/* <label htmlFor="message">Message:</label> */}
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here"
              ></textarea>
            </div>
            {/* <button type="submit">Submit</button> */}
            <div className=" col-lg-3 col-md-6 col-sm-12">
            <Button  
                    disabled={false} 
                    to='/Contact' 
                    className="Button-one col-lg-4 col-md-6 col-sm-12" 
                    style={{ 
                        backgroundColor: '#eeb400', 
                        color: '#000',
                        borderRadius: '5px',
                        border: '1px solid #eeb400',
                        // opacity: '0.2',
                        height: '40px',
                        width: '100%',
                        marginBottom: '10px',
                    }}
                    hoverStyle={{ 
                        backgroundColor: '#fff',
                        color: '#1e1e1e',
                    }}
                    
                    > <p 
                    style={{
                        margin: '0px',
                        fontSize: '71%',
                        padding: '0px 20px',
                        }}>
                        Submit</p></Button>
            </div>
          </form>

          <div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                  <FaLocationArrow />
                  <p>1B Olabanji Olajide Crescent, Off Mobolaji Johnson Estate, Lekki Phase 1, Lekki, Lagos</p>
              </div>
              <div>
                  <FaMailchimp/>
                  <p>hello@riterealtors.com</p>
              </div>
              <div>
                  <FaPhone />
                  <p>+234 809 413 7777</p>
              </div>
              <div>
                <p>Connect With Us</p>
                
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      <Footer />
    </div>
    
  );
};

export default Contact;
