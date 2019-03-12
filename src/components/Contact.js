import React from 'react';
import PropTypes from 'prop-types';


// ({contacts}) intanst for props
const Contact = props => (
  <ul>
    {props.contacts.map((contact, index) => (
      <li key={index}>
        {contact.name} - {contact.address}
      </li>
    ))}
  </ul>
);

Contact.defaultProps = {
  contacts: []
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired
    })
  )
};

export default Contact;
