const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filterContacts = getFilter(state);
  return contacts.filter((contact) => contact.name.toLowerCase().includes(filterContacts));
};

export { getContacts, getFilter, getVisibleContacts };