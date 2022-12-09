import css from './Filter.module.css';
export const Filter = ({ filterContact, onChange }) => {
  return (
    <label className={css.label}>
      <span className={css.title}>Find contacts by name</span>
      <input
      name='name'
        type="text"
        title={'Start typing the contact name..'}
        placeholder='Start typing the contact name..'
        value={filterContact}
        onChange={onChange}
      />
    </label>
  );
};
