
import ContactList from './components/ContactList';
import NameForm from './components/NameForm/NameForm';
import Filter from './components/Filter';
import Container from './components/Container';

import './App.css';

export default function App() {
  
    return (
       <Container>
       <h1 className="title"> Phonebook </h1>
       <h2 className="subtitle">Add new contact</h2>
       <NameForm  />
       <h2 className="subtitle">Find contact</h2>
       <Filter />
       <h2 className="subtitle">Contact list</h2>
       <ContactList />
       </Container>
    )
}

