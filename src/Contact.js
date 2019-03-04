import React from "react";

// ({contacts}) intanst for props
const ContactComponent = props => (
  <ul>
    {props.contacts.map((contact, index) => (
      <li key={index}>
        {contact.name} - {contact.address}
      </li>
    ))}
  </ul>
);

export default ContactComponent;
