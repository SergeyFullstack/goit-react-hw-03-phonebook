import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactList/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsLocalStorage = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLocalStorage) {
      this.setState({ contacts: contactsLocalStorage });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== this.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  onSubmitForm = contacts => {
    this.setState({ contacts: [contacts, ...this.state.contacts] });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  removeContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.onSubmitForm} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} changeFilter={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </section>
    );
  }
}
