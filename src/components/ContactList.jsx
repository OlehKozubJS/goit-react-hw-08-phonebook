import ContactListStyles from './PhonebookCSS/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../redux/selectors';
import { fetchContacts, deleteContact } from '../redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = (query, items) => {
    const filteredItems = items.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredItems;
  };

  const data = getFilteredContacts(filter, contacts);

  return (
    <ul className={ContactListStyles.contactList}>
      {data.map(item => (
        <li key={item.id} className={ContactListStyles.contactListItem}>
          <span className={ContactListStyles.contactListItemText}>
            {item.name}: {item.number}
          </span>
          <button
            data-id={item.id}
            className={ContactListStyles.contactListItemButton}
            onClick={event =>
              dispatch(deleteContact(event.currentTarget.dataset.id))
            }
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
