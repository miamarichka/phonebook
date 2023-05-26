import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_FILTER } from 'redux/filter';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactList/ContactsList';
import { getContacts, getFilter, hasError, loadingStatus } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Error } from '../Error/Error';

const Contacts = () => {
  const dispatch = useDispatch();
  const filterSearch = useSelector(getFilter);
  const loading = useSelector(loadingStatus);
  const error = useSelector(hasError);
  const items = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
}, [dispatch])


  const changeFilter = ({ target: { value } }) => {
    dispatch(UPDATE_FILTER(value))
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filterSearch.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredConctacts = getFilteredContacts();

    return (
      <>
        <div className="container">
          <h1 className="phonebook__title title">PhoneBook</h1>
          <Form />
          <h2 className="contact-list__title title">Contacts</h2>
          <Filter filter={filterSearch} onChange={changeFilter} />
          {!loading && error && <Error/>}
          {!!items && !loading && !error && (
            <ContactsList
              contactsList={filteredConctacts}
            />
          )}
        </div>
      </>
    );
  }

export default Contacts;