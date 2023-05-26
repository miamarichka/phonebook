import React from "react";
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { hasError, loadingStatus } from 'redux/selectors';
import { Error } from "components/Error/Error";

export const Contact = ({ name, number, id}) => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingStatus);
  const error = useSelector(hasError);

  const onDeleteContact = contactId => {
  dispatch(deleteContact(contactId))
  };

  return (
    <li className="contact-list__item" id={id}>
      {name}: {number}
      <button
        type="button"
        className="contact-list__btn"
        onClick={() => {onDeleteContact(id)}}
        disabled={loading}
      >
        {loading ? "Deleting" : "Delete contact"}
      </button>
      {!loading && error && <Error/>}
    </li>
  );
};