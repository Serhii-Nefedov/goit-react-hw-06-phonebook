import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const addContact = createAction('form/addContact', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
}));

const deleteContact = createAction('form/deleteContact');

const filterContacts = createAction('contactsList/filterContacts');

export { addContact, deleteContact, filterContacts };