import { combineReducers } from 'redux';
import actionTypes from './contacts-types';

const initialState = [
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
];

const contactsList = localStorage.getItem('contacts');
const parsedContactsList = JSON.parse(contactsList);

const items = (state = parsedContactsList || initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];
    
    case actionTypes.DELETE:
      return state.filter(({ id }) => id !== payload);
    
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload;
    
    default:
      return state;
  }
};

export default combineReducers({items, filter});
