  
import React from 'react';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import {getVisibleContacts} from '../../redux/selectors'

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));


return (
  <ul >
    {contacts.map(({ id, name,phone }) => (
      <li className={ s.container} key={id} >
        <p className={ s.name}>{name}</p>
        <p className={ s.name}>{phone}</p>
        <button className={ s.button} type="button" onClick={() => onDeleteContact(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);}

export default ContactList;