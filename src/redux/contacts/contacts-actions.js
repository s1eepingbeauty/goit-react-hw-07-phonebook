import actionTypes from './contacts-types';

const addContact = (newContact) => ({
  type: actionTypes.ADD,
  payload: newContact,
});

const deleteContact = (id) => ({
  type: actionTypes.DELETE,
  payload: id,
});

const filterContacts = (filter) => ({
  type: actionTypes.FILTER,
  payload: filter,
});

const postData = (data) => ({
  type: actionTypes.POST,
  payload: {
    request: [data],
    success: false,
    error: null,
  },
});

const getData = (data) => ({
  type: actionTypes.GET,
  payload: {
    request: [data],
    success: false,
    error: null,
  },
});

const deleteData = (id) => ({
  type: actionTypes.DELETE,
  payload: {
    request: id,
    success: false,
    error: null,
  },
});

export { addContact, deleteContact, filterContacts, postData, getData, deleteData };
