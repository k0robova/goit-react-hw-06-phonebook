import React from 'react';
import { useSelector } from 'react-redux';
// import css from './ContactList.module.css';
// import { Form } from 'components/Form/Form';
// import { nanoid } from 'nanoid';
import ContactElement from 'components/ContactElement/ContactElement';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // const dispatch = useDispatch();

  const filteredContacts = () => {
    console.log(filter);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleFilteredContacts = filteredContacts();

  return (
    <>
      {/* <Form addContact={addContact} /> */}
      <ul>
        {visibleFilteredContacts.map(({ id, name, number }) => (
          <ContactElement key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};
