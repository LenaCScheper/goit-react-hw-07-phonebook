import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import Loader from '../Loader';
import {
  ButtonDelete,
  IndexNumber,
  Container,
  Name,
  Number,
} from './ContactsItem.styles';

export default function ContactsItem({ id, name, number, index }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Container>
      <IndexNumber>{`${index + 1}.`}</IndexNumber>
      <Name>{name}: </Name>
      <Number>{number}</Number>
      <ButtonDelete onClick={() => deleteContact(id)} disabled={isLoading}>
        {isLoading ? <Loader size={10} /> : 'Delete'}
      </ButtonDelete>
    </Container>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
