import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter';
import { LoadAlert } from '../components/LoadAlert';
import PhonebookStyles from '../components/PhonebookCSS/Pnonebook.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={PhonebookStyles.phonebook}>
      <h1 className={PhonebookStyles.phonebookHeader}>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <LoadAlert>Request in progress...</LoadAlert>}
      <h2 className={PhonebookStyles.contactsHeader}>Contacts</h2>
      <Filter className="filterInput" />
      <ContactList className="contactList" />
    </div>
  );
};
