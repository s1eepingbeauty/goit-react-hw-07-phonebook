import types from './types';

const initialState = {
  items: [
    {
      id: 'id-1',
      name: 'Rosie Simpson',
      number: '459-12-56',
    },
    {
      id: 'id-2',
      name: 'Hermione Kline',
      number: '443-89-12',
    },
    {
      id: 'id-3',
      name: 'Eden Clements',
      number: '645-17-79',
    },
    {
      id: 'id-4',
      name: 'Annie Copeland',
      number: '227-91-26',
    },
  ],
  filter: [],
};

const contactsList = localStorage.getItem('contacts');
const parsedContactsList = JSON.parse(contactsList);
const fromLocalStorage = {
  items: parsedContactsList,
  filter: [],
};

const reducer = (state = fromLocalStorage || initialState, action) => {
  const contacts = state;
  switch (action.type) {
    case types.ADD:
      return {
        ...contacts,
        items: [...contacts.items, action.payload],
      };
    case types.DELETE:
      return {
        ...contacts,
        items: contacts.items.filter((contact) => contact.id !== action.payload),
      };
    case types.FILTER:
      return {
        ...contacts,
        filter: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;