import { Component } from 'react';
import { nanoid } from 'nanoid';

// import contacts from 'contacts.json';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper, Title} from './App.styled';
export class App extends Component {
  state = {
    // contacts: contacts;
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem("contacts")
    
    if (localData) {
      this.setState({contacts: JSON.parse(localData)})
    }
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  onDuplicateCheck = (name , number) => {
    return this.state.contacts.some(contact => contact.name.toLowerCase() === name || contact.number === number);
  };

  addContact = event => {
    event.preventDefault();

    const { name, number } = event.currentTarget.elements;

    const contact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    // console.log(contact)

    if (this.onDuplicateCheck(contact.name, contact.number)) {
      event.currentTarget.reset();
      name.focus();
      alert(`${contact.name} is already in contacts`);
      return;
    }


    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    event.currentTarget.reset();
  };

  onChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.onChangeFilter} />
        <ContactList
          contacts={this.showFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
