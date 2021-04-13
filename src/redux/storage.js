import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const rootReducer = {
  contacts: reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;