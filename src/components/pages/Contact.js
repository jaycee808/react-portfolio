import React, { useState } from 'react';

function Contact() {
    // return (
    //     <div>
    //     <h1>Contact.</h1>
    //     <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //     </p>
    //     </div>
    // );



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implement email sending functionality

    setName('');
    setEmail('');
    setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}


export default Contact;
