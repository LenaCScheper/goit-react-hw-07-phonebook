import './App.css';
import { ToastContainer } from 'react-toastify';
import ContactList from './contacts/ContactList';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <ToastContainer autoClose={3000} />
      <Filter />
      <h2 className="subitle">Contacts</h2>
      <ContactList />
    </div>
  );
}
