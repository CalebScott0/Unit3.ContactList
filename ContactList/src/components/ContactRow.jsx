import React from "react";

export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    // onclick with passed down props contact and setSelectedContactId
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td className="contact-row">{contact.name}</td>
      <td className="contact-row">{contact.email}</td>
      <td className="contact-row">{contact.phone}</td>
    </tr>
  );
}
