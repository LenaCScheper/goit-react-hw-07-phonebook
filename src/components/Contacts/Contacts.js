import PropTypes from 'prop-types';
import { Container } from './Contacts.styles';
import ContactsItem from '../ContactsItem';
import Loader from '../Loader';
import { useGetContactsQuery } from 'redux/contacts/contacts-slice';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default function Contacts({ filter }) {
  const { contacts, isFetching, isError, error } = useGetContactsQuery(
    undefined,
    {
      selectFromResult: ({ data, isFetching, isError, error }) => ({
        contacts: data && getVisibleContacts(data, filter),
        isFetching,
        isError,
        error,
      }),
    }
  );

  let contactsElements = null;

  if (contacts) {
    contactsElements = contacts.map(({ id, name, number }, index) => {
      return (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          index={index}
        />
      );
    });
  }

  return (
    <Container>
      {isError && <p>{error.data}</p>}
      {contactsElements}
      {isFetching && <Loader />}
    </Container>
  );
}
