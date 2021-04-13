import types from './types';

const addContact = (newContact) => ({
  type: types.ADD,
  payload: newContact,
});

const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
});

const filterContacts = (filter) => ({
  type: types.FILTER,
  payload: filter,
});

export { addContact, deleteContact, filterContacts };