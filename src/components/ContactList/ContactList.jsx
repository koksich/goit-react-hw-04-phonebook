import PropTypes from 'prop-types';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            phone={number}
            onDelete={onDeleteContact}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func,
};