import React, { useState } from 'react';
import './Contact.css'; // Importing the CSS for better styling

const Contact = () => {
    const [name, setName] = useState('');
    const [PhoneNo, setPhoneNo] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset form
        setName('');
        setPhoneNo('');
        setMessage('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
    <p className="title">Contact Us</p>
    <p className="message">Have any questions? Feel free to reach out to us, and we’ll get back to you shortly.</p>
    <div className="flex">
        {/* You can add content here if needed */}
    </div>
    <label>
        <input
            required
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="" // Optional: can be removed if you don't want a placeholder
        />
        <span>Username</span>
    </label>
    <label>
        <input
            required
            type="text"
            className="input"
            value={PhoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder="" // Optional: can be removed if you don't want a placeholder
        />
        <span>Phone No.</span>
    </label>
    <label>
        <input
            required
            type="text"
            className="input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="" // Optional: can be removed if you don't want a placeholder
        />
        <span>Message</span>
    </label>
    <button type="submit" className="submit">Send Message</button>
</form>


    );
};

export default Contact;
