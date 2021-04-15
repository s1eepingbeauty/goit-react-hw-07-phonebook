import axios from 'axios';
import { getData, postData, deleteData } from './contacts-actions';
//Напиши Redux-операции для работы с асинхронными запросами по паттерну request, success и error.

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContactsList = () => (dispatch) => {
  dispatch(getData.payload.request());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getData.payload.success(data)))
    .catch((error) => dispatch(getData.payload.error(error)));
};

const fetchAddContact = (newContact) => (dispatch) => {
  dispatch(postData.payload.request());
  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(postData.payload.success(data)))
    .catch((error) => dispatch(postData.payload.error(error)));
};

const fetchDeleteContact = (id) => (dispatch) => {
  dispatch(deleteData.preload.request());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteData.preload.success(id)))
    .catch((error) => dispatch(deleteData.preload.error(error)));
};

export { fetchContactsList, fetchAddContact, fetchDeleteContact };
