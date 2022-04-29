// import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
// import { addContact } from '../services/contact-api';

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccsess');
export const addContactError = createAction('phonebook/addContactError');

export const deleteContactRequest = createAction('phonebook/deleteContactRequest');
export const deleteContactSuccess = createAction('phonebook/deleteContactSuccsess');
export const deleteContactError = createAction('phonebook/deleteContactError');

export const fetchContactRequest = createAction('phonebook/fetchContactRequest');
export const fetchContactSuccess = createAction('phonebook/fetchContactSuccsess');
export const fetchContactError = createAction('phonebook/fetchContactError');

export const changeFilter=createAction('phonebook/changeFilter')


// eslint-disable-next-line import/no-anonymous-default-export
 
