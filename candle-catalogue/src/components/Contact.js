import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8081/contact', data);
      console.log('Server response:', response.data);
      // Show a success message or reset the form
      alert('Message sent successfully!');
      // Optionally reset the form fields
      // reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show an error message
      alert('Error submitting message. Please try again.');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    paddingTop: '60px',
    paddingBottom: '60px',
    backgroundColor: '#FFE4E1',
    backgroundImage: `url(${process.env.PUBLIC_URL}/pinkie.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const boxStyle = {
    background: 'rgba(255, 255, 255, 0.6)',
    padding: '30px',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.6)',
    borderRadius: '15px',
    width: '100%',
    maxWidth: '900px',
    textAlign: 'left',
    margin: '0 auto',
  };

  const headingStyle = {
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    color: '#d63384',
    fontWeight: 'bolder',
    textAlign: 'center',
  };

  const formControlStyle = {
    width: '100%',
    marginBottom: '1rem',
  };

  const btnStyle = {
    backgroundColor: '#ffc0cb',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const btnHoverStyle = {
    backgroundColor: '#ffb6c1',
  };

  const underlineStyle = {
    height: '4px',
    width: '4rem',
    backgroundColor: '#d63384',
    margin: '10px auto',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <section>
          <h5 style={headingStyle}>Contact Form</h5>
          <div style={underlineStyle}></div>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullName">Name</label>
              <input 
                id="fullName"
                type="text" 
                className="form-control" 
                style={formControlStyle} 
                placeholder="Enter Full Name" 
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                id="phone"
                type="text" 
                className="form-control" 
                style={formControlStyle} 
                placeholder="Enter Phone Number" 
                {...register('phone', { 
                  required: 'Phone number is required', 
                  pattern: { value: /^[0-9]{10}$/, message: 'Phone number must be 10 digits' }
                })}
              />
              {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="text" 
                className="form-control" 
                style={formControlStyle} 
                placeholder="Enter Email Address" 
                {...register('email', { 
                  required: 'Email is required', 
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' }
                })}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                rows="3" 
                className="form-control" 
                style={formControlStyle} 
                placeholder='Type Message Here'
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}
            </div>
            <div className="form-group py-3">
              <button 
                type="submit" 
                className="btn custom-btn shadow" 
                style={btnStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = btnHoverStyle.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffc0cb'}
              >
                <span style={{ color: '#d63384' }}>Send</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
