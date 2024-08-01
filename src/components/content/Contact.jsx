import React, { useState } from 'react';

export const Contact = () => {


    const styleContact = {
        form: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },

        name: {
            width: '300px',
            padding: '20px 10px'
        },

        email: {
            width: '300px',
            padding: '20px 10px'
        },
        textMessage: {
            width: '320px'
        }

    }

    const [name, setName] = useState('');
    

    const handleChange = (event) => {
        setName(event.target.value);
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form submitted with name: ${name}`);
    };

    return (
    <form style={styleContact.form}>
        <label>
            <h1>Name</h1>
            <input type='text' placeholder='Enter your name!' style={styleContact.name} />
        </label>
        <label>
            <h1>Email</h1>
            <input type='email' placeholder='Enter your e-mail!' style={styleContact.email} />

        </label>
        <br />
        <br />
        <textarea placeholder='Your message here!' cols='40' rows='10' style={styleContact.textMessage}></textarea>
        <br />
        <br />
        <button type='submit'>Submit</button>
    </form>
    )
};