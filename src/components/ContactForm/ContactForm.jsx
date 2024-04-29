import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAdd }) => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: nanoid(), ...contact };
    onAdd(newContact);
    setContact({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="number"
        placeholder="Phone number"
        value={contact.number}
        onChange={handleChange}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
