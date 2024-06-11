import React from "react";

export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    // onclick with passed down props contact and setSelectedContactId
    <tr onClick={() => {setSelectedContactId(contact.id)}}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
