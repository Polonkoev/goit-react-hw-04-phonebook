import css from './ContactItem.module.css'

export const ContactItem = ({name, number, itemKey, deleteContact})=>{
    return (
    <>
    <p key={itemKey}>{name}: {number}</p>
    <button className={css.button} onClick={() => deleteContact(itemKey)}>Delete</button>
    </>
)
}