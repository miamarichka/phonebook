import React, { useRef, useState } from "react";
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import { getContacts, hasError, loadingStatus } from "redux/selectors";
import { addContact } from "redux/operations";
import { Error } from "components/Error/Error";


export const Form = () => {
  const loading = useSelector(loadingStatus);
  const error = useSelector(hasError);
  const items = useSelector(getContacts);
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const inputNameId = useRef(nanoid());
  const inputPhoneId = useRef(nanoid());

 const formSubmitHandler = data => {
    const { name, number } = data;
    checkNewContact(name, number);
  };

  const checkNewContact = (name, number) => {
    const isContactNameExist = items.some(
      contact => contact.name === name
    );
    const isContactNumberExist = items.some(
      contact => contact.number === number
    );

    isContactNameExist
      ? alert(`${name} is already in contacts`)
      : isContactNumberExist
      ? alert(`${number} is already in contacts`)
      : dispatch(addContact({ name, number }));
  };
  const handleOnInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
      default:
        return;
    }
  };

  const handleOnFormSubmit = e => {
    e.preventDefault();
    formSubmitHandler({name:name, number:number})
    setName('');
    setNumber('');
  };

    return (
      <form id="form" onSubmit={handleOnFormSubmit}>
        <div className="phonebook__name">
          <label htmlFor={inputNameId} className="phonebook__label">
            Name
          </label>
          <input
            className="phonebook__input"
            id={inputNameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleOnInputChange}
            disabled={loading}
          />
        </div>
        <div className="phonebook__phone">
          <label htmlFor={inputPhoneId} className="phonebook__label">
            Number
          </label>
          <input
            className="phonebook__input"
            id={inputPhoneId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleOnInputChange}
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          className="phonebook__btn"
          disabled={loading}
        >
          {loading ? "Adding contact" : " Add contact"}
        </button>
        {error && !loading && <Error/>}
        <div />
      </form>
    );
}