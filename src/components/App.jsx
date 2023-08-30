import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { LoadAlert } from './LoadAlert';
import PhonebookStyles from './PhonebookCSS/Pnonebook.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/selectors';

export const App = () => {
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
