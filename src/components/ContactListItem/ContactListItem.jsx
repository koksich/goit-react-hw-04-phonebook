import PropTypes from 'prop-types';
import { Item, Contact, Button } from './ContactListItem.styled';


export const ContactListItem = ({ id, name, phone, onDelete }) => {
  return (
    <Item>
      <div>
        <Contact>{name}: </Contact>
        <Contact>{phone}</Contact>
      </div>
      <Button type="button" aria-label="delete" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};