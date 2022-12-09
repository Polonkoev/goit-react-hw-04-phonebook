import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';

const App = () => {
  let [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  let [filterContact, setFilterContact] = useState('');

//При первом монтировании 

useEffect(()=>{
  const savedContacts = localStorage.getItem('contacts')
  if (savedContacts) {
    setContacts(contacts = JSON.parse(savedContacts))
    
  }
},[])

//При обновлении
useEffect(()=>{
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])


  const addContact = newContact => {
    const findContact = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );
    if (findContact) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts((contacts = [...contacts, newContact]));
    }
  };

  const handleFilter = ({ target: { value } }) => {
    setFilterContact((filterContact = value));
  };

  const renderContacts = () => {
    const renderedContacts = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filterContact.trim().toLowerCase());
    });
    return renderedContacts;
  };

  const deleteContact = data => {
    setContacts((contacts = contacts.filter(contact => contact.id !== data)));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />

      <h2 className={css.contacts}>Contacts</h2>

      <Filter
        contacts={contacts}
        filter={filterContact}
        onChange={handleFilter}
      />

      <ContactList
        contactList={renderContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};

App.propTypes = {
  addContact: PropTypes.func,
  handleFilter: PropTypes.func,
  renderContacts: PropTypes.func,
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default App;
