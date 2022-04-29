  
import {useEffect} from 'react';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/operations';
import { getVisibleContacts, getError } from '../../redux/selectors';
import Loader from '../Loader/Loader';


function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(operations.deleteContact(id));

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  //   return (
  //  <ul >
  //           {contacts.map(({ id, name, phone }) => (
  //               <li className={ s.container} key={id} >
  //               <p className={ s.name}>{name}</p>
  //               <p className={ s.name}>{phone}</p>
  //               <button className={ s.button} type="button" onClick={() => onDeleteContact(id)}>Удалить</button>
  //             </li>
  //           ))}
  //         </ul>
  //   );
  
  if (contacts.length > 0 && !error) {
    return (
      <ul >
        {contacts.map(({ id, name, phone }) => (
          <li className={s.container} key={id} >
            <p className={s.name}>{name}</p>
            <p className={s.name}>{phone}</p>
            <button className={s.button} type="button" onClick={() => onDeleteContact(id)}>Удалить</button>
          </li>
        ))}
      </ul>)
  }
  else if (contacts.length === 0 && !error) {
    return (
      <div>
        <Loader />
        <p>Ну давай подожем!</p>
      </div>
    )
  }
  else if (error) {
    return (
      <div>
        {error && <h2>{error.message}</h2>}
        <p>Ща гляну.Наверное снова кот провода погрыз!</p>
      </div>
    )
  }
  else {
    return (
      <Loader />
    )
  }
}
//   return (
//     <>
      
//       {contacts.length > 0 && !error ? (
//         <ul >
//           {contacts.map(({ id, name, phone }) => (
//               <li className={ s.container} key={id} >
//               <p className={ s.name}>{name}</p>
//               <p className={ s.name}>{phone}</p>
//               <button className={ s.button} type="button" onClick={() => onDeleteContact(id)}>Удалить</button>
//             </li>
//           ))}
//         </ul>) :
//         (<div>
//           {error && <h2>{error.message}</h2>}
//           <p>Че смотришь? Пиши контакты!</p>
//         </div>)
  
//       }
//     </>
//   );
// }

export default ContactList;