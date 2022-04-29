import { useState} from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import {addContact} from '../../redux/actions';
import s from './NameForm.module.css';

export default function Nameform() {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    // const onSubmit = ({ name, number }) => dispatch(actions.addContact(name, number));
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

      const handleChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default: return;
        };
    };

    const resetinput = () => {
        setName('');
        setPhone('');
    }

    const checkRepeatName = name => {
        return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    };  

    const checkRepeatPhone = phone => { return contacts.find(contact => contact.phone === phone) };

    const handleSubmit = event => {
        event.preventDefault();
       
        if (checkRepeatName(name)) {
         alert(`${name} is already added.`)
        }
        else if (checkRepeatPhone(phone)) {
            alert(`${phone} is already added.`)
        }
        else if (name.trim() === '' || phone.trim() === '') {
            alert('All of inputs must be not empty')
            }
        else {
            dispatch(addContact(name,phone));
        }
        resetinput();
    };
    
    const nameInputId = shortid.generate();
    const phoneInputId = shortid.generate();

    return (
        <>
            <form className={s.form} onSubmit={handleSubmit}>
                <div className={s.container}>
                    <label className={s.label}>
                        Name
                            <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={handleChange}
                            id={nameInputId}
                        />
                    </label >
                    <label className={s.label}>
                        Phone
                             <input
                            type="text"
                            name='phone'
                            value={phone}
                            onChange={handleChange}
                            id={phoneInputId}
                        />
                    </label>
                        

                    <button className={s.button} type='submit'>Add contact</button>

                </div>
            </form>
        </>
    );


};
