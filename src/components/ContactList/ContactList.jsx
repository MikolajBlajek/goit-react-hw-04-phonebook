import React from 'react';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} onDelete={onDelete} />
      ))}
    </ul>
  );
};

const ContactItem = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      {name}: {number}
      <button style={{ marginLeft: '10px' }} onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactList;
