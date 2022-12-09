import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css'
export const ContactList = ({ contactList, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contactList.map(a => {
        return (
          <li key={a.id}>
            <ContactItem
              name={a.name}
              number={a.number}
              itemKey={a.id}
              deleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};
