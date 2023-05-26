import React from 'react';
import { Contact } from '../ContactItem/Contact';

export const ContactsList = ({ contactsList }) => {

  return (
    <>
      <ul className="contact-list">
        {contactsList.map(({name, number, id}) => {
          return (
            <Contact
              name={name}
              number={number}
              key={id}
              id={id}
            />
          );
        })}
      </ul>
    </>
  );
};
