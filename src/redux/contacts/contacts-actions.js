import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const filterContacts = createAction('contacts/filter');

const postData = createAction('contacts/post', (data) => {
  return {
    payload: {
      request: [data],
      success: false,
      error: null,
    },
  }
});

const getData = createAction('contacts/get', (data) => {
  return {
    payload: {
      request: [data],
      success: false,
      error: null,
    },
  }
});

const deleteData = createAction('contacts/delete_contact', (id) => {
  return {
    payload: {
      request: id,
      success: false,
      error: null,
    },
  }
});

export { addContact, deleteContact, filterContacts, postData, getData, deleteData };
