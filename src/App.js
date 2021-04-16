import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import styles from './styles.module.css';

const App = () => {
  return (
    <div className={styles.phoneBookContainer}>
      <div className={styles.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
