import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import css from './ContactForm.module.css'


const ContactForm = ({addContact})=>{
  
let [name, setName] = useState('')
let [number, setNumber] = useState('')

 const handleChange = ({target:{name, value}}) => {
 


    
     switch (name) {
      case 'name':
        setName(name = value)
        break;
    case 'number':
      setNumber(number = value)
      break;
      default:
        
    }
    
  };


  const submitHandler = event => {
    event.preventDefault();
    addContact({ name, number, id: nanoid() });
    
    setName(name = '')
    setNumber(number = '')
  };

  
  
    return (
      <form className={css.form} onSubmit={submitHandler}>
        <label className={css.label}>
          <span className={css.name}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={css.label}>
        <span className={css.number}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
          
        </label>
        <button className={css.button}>Add contact</button>
      </form>
    );
  }


export default ContactForm;


ContactForm.propTypes = {
  addContact: PropTypes.func,
  submitHandler: PropTypes.func,
  handleChange: PropTypes.func,
  
}