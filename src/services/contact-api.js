import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export const fetchContacts = () => axios.get('/Contactlist');

export const addContact = contact => axios.post('/Contactlist', contact);

export const deleteContact = contactId => axios.delete(`./Contacts'/${contactId}`);