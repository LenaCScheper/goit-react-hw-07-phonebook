import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'http://localhost:4000';

export const addContact = (name,phone)=>dispatch => {
    const contact = {
        name,
        phone
        
    };

    dispatch(actions.addContactRequest());
     
   
    axios
        .post('/Contactlist', contact)
        .then(({ data }) =>
            dispatch( actions.addContactSuccess(data) ))
        .catch(error => dispatch(actions.addContactError(error)));
    
};

export const deleteContact = contactId => dispatch => {
    
    dispatch(actions.deleteContactRequest());

    axios
        .delete(`./Contactlist/${contactId}`)
        .then(() =>
            dispatch(actions.deleteContactSuccess(contactId)))
        .catch(error => dispatch(actions.deleteContactError(error)));
};

export const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactRequest());

  axios
    .get('/Contactlist')
      .then(({ data }) =>
          dispatch(actions.fetchContactSuccess(data)))
    .catch(error => dispatch(actions.fetchContactError(error)));
};
