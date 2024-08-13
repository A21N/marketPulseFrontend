import React, { useState } from 'react';
import './pages_css/contact.css'; // Asigură-te că există un stil pentru textul alb

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  // Funcție pentru a gestiona schimbările de input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Funcție pentru a valida emailul
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Funcție pentru a gestiona trimiterea formularului
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne reîncărcarea paginii la trimiterea formularului

    // Validăm emailul
    if (!validateEmail(formData.email)) {
      setResponseMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Trimitem cererea POST către serverul Express
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Convertim datele în JSON
      });

      // Verificăm dacă răspunsul este OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Convertim răspunsul în JSON
      console.log('Server response:', data);
      setResponseMessage('Message sent successfully!');

      // Golește câmpurile formularului după trimitere
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setResponseMessage('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div id='position-form'>
      <h1>Contact me!</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <h4 className='align-form'>Name</h4>
          <input
            type="text"
            id='name'
            placeholder="Enter your name!"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='email'>
          <h4 className='align-form'>Email</h4>
          <input
            type="email"
            id='email'
            placeholder="Enter your email!"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='message'>
          <h4 className='align-form'>Message</h4>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder='Enter your message!'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <label id='submit-message'>
          <input type='submit' id='submit-contact' value='Send message!' />
        </label>
      </form>
      {responseMessage && <p className="response-text">{responseMessage}</p>}
    </div>
  );
};
