import { combineReducers } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from '../redux/actions';

const contactsReducer = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
);

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;