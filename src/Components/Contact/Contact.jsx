import React, { useState } from 'react';
/* import { db, collection, addDoc } from '../../firebase'; */
import './contact.scss';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      /* Uncomment and configure this once Firebase is set up */
      // await addDoc(collection(db, 'contactMessages'), {
      //   name,
      //   email,
      //   message,
      // });
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="contactContainer">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="formContainer">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
